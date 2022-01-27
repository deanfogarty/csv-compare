<script lang="ts">
  export let data: Array<object>;
  export let keys: Array<string>;
</script>

{#if data.length}
  <table>
    <tr>
      {#each keys as k}
        <th>{k}</th>
      {/each}
    </tr>

    {#each data as row}
      <tr>
        {#each keys as k}
          <td>{row[k]}</td>
        {/each}
      </tr>
    {/each}
  </table>
{/if}

<style>
  :global(table, th, td) {
    padding: 0.5em;
    border-collapse: collapse;
    border: 1px solid #efefef;
  }
  :global(table) {
    width: 100%;
  }
  :global(td, th) {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
</style>
