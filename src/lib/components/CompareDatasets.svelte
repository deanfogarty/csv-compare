<script lang="ts">
  import KeySelect from '$lib/components/KeySelect.svelte';
  import FieldMatch from '$lib/components/FieldMatch.svelte';
  import CompareTable from '$lib/components/CompareTable.svelte';

  export let fileA: Array<object>;
  export let fileB: Array<object>;
  export let keysA: Array<string>;
  export let keysB: Array<string>;
  export let filenameA: string;
  export let filenameB: string;

  let keyA: string;
  let keyB: string;
  let fieldMap: Array<Array<string>> = [];

  let fieldsA: Array<string>;
  let fieldsB: Array<string>;

  $: fieldsA = keysA.filter((k) => k !== keyA);
  $: fieldsB = keysB.filter((k) => k !== keyB);
</script>

<div class="wrapper">
  <KeySelect {filenameA} {filenameB} bind:keyA bind:keyB {keysA} {keysB} />
  <FieldMatch {filenameA} {filenameB} bind:fieldMap {fieldsA} {fieldsB} />
</div>

<CompareTable {fieldMap} {filenameA} {filenameB} {keyA} {keyB} {keysA} {keysB} {fileA} {fileB} />

<style>
  .wrapper {
    margin-top: 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
  }
</style>
