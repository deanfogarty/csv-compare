<script lang="ts">
  export let keysA: Array<string>;
  export let keysB: Array<string>;

  export let keyA: string;
  export let keyB: string;

  export let filenameA: string;
  export let filenameB: string;
</script>

<div class="wrapper">
  <fieldset>
    <legend>Select key to match between files</legend>
    <div class="pick-key">
      <div>
        <p><strong>{filenameA}</strong></p>
        <ul>
          {#each keysA as ka (ka)}
            <li>
              <label>
                <input type="radio" bind:group={keyA} value={ka} />
                {ka}
              </label>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <p><strong>{filenameB}</strong></p>
        <ul>
          {#each keysB as kb (kb)}
            <li>
              <label>
                <input type="radio" bind:group={keyB} value={kb} />
                {kb}
              </label>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </fieldset>
</div>

<style>
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  .pick-key {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
