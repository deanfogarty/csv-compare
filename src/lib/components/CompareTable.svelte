<script lang="ts">
  export let keyA: string;
  export let keyB: string;
  export let keysA: Array<string>;
  export let keysB: Array<string>;
  export let fileA: Array<object>;
  export let fileB: Array<object>;
  export let filenameA: string;
  export let filenameB: string;
  export let fieldMap: Array<Array<string>> = [];

  let out: Map<string, object> = new Map([]);
  let errors: Array<string> = [];
  let copiedMessage: string = '';
  let showErrors: boolean = false;

  const toggleErrors = () => {
    showErrors = !showErrors;
  };

  const filterFields = (r: object, keys: Array<string>) => {
    return keys.reduce((acc, k) => {
      acc[k] = r[k];
      return acc;
    }, {});
  };

  $: {
    errors = [];

    if (keyA && keyB) {
      /*
       * Check for repeated keys in fileA before creating the output map.
       */
      const fileAKeys = [];
      fileA.forEach((r) => {
        if (fileAKeys.includes(r[keyA])) {
          errors.push(`non-unique key in ${filenameA}: "${keyA}": "${r[keyA]}"`);
        } else {
          fileAKeys.push(r[keyA]);
        }
      });

      out = new Map(
        fileA.map((r) => {
          return [
            r[keyA],
            {
              A: filterFields(r, keysA),
              B: {},
              mismatch: { A: [], B: [] },
            },
          ];
        })
      );

      fileB.forEach((r) => {
        const record = out.get(r[keyB]);

        if (record) {
          if (Object.keys(record['B']).length > 0) {
            errors.push(`non-unique key in ${filenameB}: "${keyB}": "${r[keyB]}"`);
          } else {
            out.set(r[keyB], {
              ...record,
              B: filterFields(r, keysB),
              mismatch: { A: [], B: [] },
            });
          }
        } else {
          out.set(r[keyB], {
            A: {},
            B: filterFields(r, keysB),
            mismatch: { A: [], B: [] },
          });
        }
      });
    }

    /*
     * Check fieldmap for discrepancies and mark.
     */
    out.forEach((o, _) => {
      fieldMap.forEach((f) => {
        const fileAField = f[0];
        const fileBField = f[1];

        if (o['A'][fileAField] !== o['B'][fileBField]) {
          o['mismatch'].A.push(fileAField);
          o['mismatch'].B.push(fileBField);
        }
      });
    });
  }

  const copyToClipboard = () => {
    const range = document.createRange();
    const sel = window.getSelection();
    sel.removeAllRanges();

    range.selectNodeContents(document.getElementById('results'));
    sel.addRange(range);
    document.execCommand('copy');

    sel.removeAllRanges();

    copiedMessage = 'Results table copied to the clipboard; now paste into a spreadsheet.';
    setTimeout(() => {
      copiedMessage = '';
    }, 5000);
  };
</script>

<div class="errors">
  {#if errors.length}
    <button type="button" on:click={toggleErrors}>{showErrors ? 'Hide' : 'Show'} Errors</button>
    {#if showErrors}
      <ul>
        {#each errors as e}
          <li>{e}</li>
        {/each}
      </ul>
    {/if}
  {/if}
</div>

<div>
  <button type="button" on:click={copyToClipboard}>Copy table to clipboard</button>
  <span>{copiedMessage}</span>
</div>

{#key out}
  <table id="results">
    <thead>
      <tr>
        <th>Files</th>
        <th colspan={keysA.length}>
          {filenameA}
        </th>
        <th>&nbsp;</th>
        <th colspan={keysB.length}>
          {filenameB}
        </th>
      </tr>

      <tr>
        <th>Row</th>
        {#each keysA as k}
          <th>{k}</th>
        {/each}
        <th>Shared Key</th>
        {#each keysB as k}
          <th>{k}</th>
        {/each}
      </tr>
    </thead>

    <tbody>
      {#each [...out] as o, i}
        <tr>
          <th>{i + 1}</th>
          {#each keysA as k}
            <td class:mismatch={o[1]['mismatch'].A.includes(k)}>
              {#if o[1]['A'][k]}
                {o[1]['A'][k]}
              {/if}
            </td>
          {/each}

          <td>{o[0]}</td>

          {#each keysB as k}
            <td class:mismatch={o[1]['mismatch'].B.includes(k)}>
              {#if o[1]['B'][k]}
                {o[1]['B'][k]}
              {/if}
            </td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/key}

<style>
  table {
    margin-top: 1em;

    /* Match Google spreadsheets default */
    font-size: 10pt;
    font-family: arial, sans-serif;
  }
  .mismatch {
    background-color: #f99;
  }
  .errors {
    margin-top: 1em;
    margin-bottom: 1em;
  }
</style>
