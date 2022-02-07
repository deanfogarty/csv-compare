<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let names: Array<string>;

  const dispatch = createEventDispatcher();

  let chooseColumns: boolean = true;
  let checkboxes: Array<boolean>;

  const toggleColumnChooser = () => {
    chooseColumns = !chooseColumns;
  };

  const updateColumns = (_: any) => {
    dispatch(
      'updateColumns',
      names.reduce((acc, val, i) => {
        if (checkboxes[i]) {
          acc.push(val);
        }
        return acc;
      }, [])
    );
  };

  const resetCheckboxes = (_: any) => {
    checkboxes = names.map((_) => true);
  };

  const selectNone = () => {
    checkboxes = checkboxes.map((_) => false);
  };
  const selectAll = () => {
    checkboxes = checkboxes.map((_) => true);
  };

  $: resetCheckboxes(names);
  $: updateColumns(checkboxes);
  $: disabled = !!!names.length;
</script>

<button type="button" on:click={toggleColumnChooser} {disabled}
  >{chooseColumns ? 'Hide' : 'Show'} columns</button
>

{#if chooseColumns}
  <div class="chooseColumns">
    {#if names.length}
      <button type="button" on:click={selectNone}>Select None</button>
      <button type="button" on:click={selectAll}>Select All</button>
    {/if}
    {#each names as n, i (n)}
      <li>
        <label>
          <input type="checkbox" bind:checked={checkboxes[i]} />
          {n}
        </label>
      </li>
    {/each}
  </div>
{/if}

<style>
  .chooseColumns {
    margin-top: 0.5em;
  }
</style>
