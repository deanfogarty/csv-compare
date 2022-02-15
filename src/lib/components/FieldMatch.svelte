<script lang="ts">
  export let fieldsA: Array<string>;
  export let fieldsB: Array<string>;

  export let fieldMap: Array<Array<string>> = [];

  export let filenameA: string;
  export let filenameB: string;

  const updateFieldMapping = (_: Array<boolean>) => {
    fieldMap = [];

    checkboxes.forEach((cb, i) => {
      if (cb && fieldsA[i] && fieldsB[i]) {
        fieldMap.push([fieldsA[i], fieldsB[i]]);
      }
    });
  };

  $: max = Math.max(fieldsA.length, fieldsB.length);
  $: checkboxes = new Array(max).map(() => false);
  $: if (fieldsA || fieldsB) updateFieldMapping(checkboxes);

  const moveA = (index: number, up: boolean) => {
    const t = fieldsA.splice(index, 1);
    fieldsA.splice(index + (up ? -1 : 1), 0, t[0]);
    fieldsA = fieldsA;
  };

  const moveB = (index: number, up: boolean) => {
    const t = fieldsB.splice(index, 1);
    fieldsB.splice(index + (up ? -1 : 1), 0, t[0]);
    fieldsB = fieldsB;
  };
</script>

<div class="wrapper">
  <fieldset>
    <legend>Match column data</legend>
    <table>
      <tr>
        <th>Include?</th>
        <th>{filenameA}</th>
        <th>{filenameB}</th>
      </tr>

      {#each { length: max } as _, i (i)}
        <tr>
          <th>
            <input type="checkbox" bind:checked={checkboxes[i]} />
          </th>
          <td>
            {#if i < fieldsA.length}
              <button type="button" on:click={() => moveA(i, true)} disabled={i === 0}
                >&#8593;</button
              >
              <button
                type="button"
                on:click={() => moveA(i, false)}
                disabled={i === fieldsA.length - 1}>&#8595;</button
              >
              {fieldsA[i] ? fieldsA[i] : ''}
            {/if}
          </td>
          <td>
            {#if i < fieldsB.length}
              <button type="button" on:click={() => moveB(i, true)} disabled={i === 0}
                >&#8593;</button
              >
              <button
                type="button"
                on:click={() => moveB(i, false)}
                disabled={i === fieldsB.length - 1}>&#8595;</button
              >
              {fieldsB[i] ? fieldsB[i] : ''}
            {/if}
          </td>
        </tr><tr />
      {/each}
    </table>
  </fieldset>
</div>
