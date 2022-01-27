<script lang="ts">
  import { onMount } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  import Table from '$lib/components/Table.svelte';
  import ColumnChooser from '$lib/components/ColumnChooser.svelte';

  export let data: Array<object>;
  export let filename: string;

  let showTable: boolean = false;
  const toggleTable = () => {
    showTable = !showTable;
  };

  const dispatch = createEventDispatcher();

  $: names = Object.keys(data[0] ?? []).sort();
  $: keys = Object.keys(data[0] ?? []);

  const updateColumns = (message: CustomEvent) => {
    keys = message.detail;
    dispatch('updateKeys', keys);
  };

  onMount(() => {
    dispatch('updateKeys', keys);
  });
</script>

<p>{filename}</p>

{#if data.length}
  <button type="button" on:click={toggleTable}>{showTable ? 'Hide' : 'Show'} table</button>
{/if}

<ColumnChooser {names} on:updateColumns={updateColumns} />
{#if showTable}
  <Table {keys} {data} />
{/if}
