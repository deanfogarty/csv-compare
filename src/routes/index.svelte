<script lang="ts">
  import csv from 'csvtojson';
  import Drop from '$lib/components/Drop.svelte';
  import TableEditor from '$lib/components/TableEditor.svelte';
  import CompareDatasets from '$lib/components/CompareDatasets.svelte';

  let fileA: Array<object> = [];
  let fileB: Array<object> = [];
  let filenameA: string = '';
  let filenameB: string = '';

  let keysA: Array<string> = [];
  let keysB: Array<string> = [];

  const loadFile = async (contents: string): Promise<Array<object>> => {
    return csv({
      flatKeys: true,
    })
      .fromString(contents)
      .then((data: Array<object>) => {
        return data;
      });
  };

  const loadOne = async (message: CustomEvent) => {
    fileA = await loadFile(message.detail.contents);
    filenameA = message.detail.name;
  };
  const loadTwo = async (message: CustomEvent) => {
    fileB = await loadFile(message.detail.contents);
    filenameB = message.detail.name;
  };

  const updateKeysA = (message: CustomEvent) => {
    keysA = message.detail;
  };
  const updateKeysB = (message: CustomEvent) => {
    keysB = message.detail;
  };
</script>

<div class="dropAreas">
  <div>
    <Drop on:loadedFile={loadOne} prompt="Drop file A here" />
    <TableEditor filename={filenameA} data={fileA} on:updateKeys={updateKeysA} />
  </div>
  <div>
    <Drop on:loadedFile={loadTwo} prompt="Drop file B here" />
    <TableEditor filename={filenameB} data={fileB} on:updateKeys={updateKeysB} />
  </div>
</div>

{#if keysA.length && keysB.length}
  <CompareDatasets {filenameA} {filenameB} {keysA} {fileA} {keysB} {fileB} />
{/if}

<style>
  .dropAreas {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
</style>
