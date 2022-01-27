<script lang="ts">
  import dragDrop from 'drag-drop';
  import { onMount, createEventDispatcher } from 'svelte';

  export let prompt: string = 'Drop previously generated file here';

  const id: string = 'droparea-' + Math.random().toString(36).slice(2);

  const prompts = new Map([
    ['ready', prompt],
    ['loading', 'Loading file, stand by'],
  ]);
  let dropPrompt = prompts.get('ready');

  const dispatch = createEventDispatcher();

  onMount(() => {
    const removeDragDropArea = dragDrop(`#${id}`, (files: Array<File>) => {
      dropPrompt = prompts.get('loading');

      setTimeout(() => {
        files.forEach((f) => {
          const reader = new FileReader();
          reader.addEventListener('load', (_) => {
            dispatch('loadedFile', {
              name: f.name,
              contents: reader.result,
            });
            dropPrompt = prompts.get('ready');
          });
          reader.readAsText(f);
        });
      }, 1000);
    });

    return () => {
      removeDragDropArea();
    };
  });
</script>

<div {id} class="drag-drop-area">
  {@html dropPrompt}
</div>

<style>
  .drag-drop-area {
    text-align: center;
    padding: 1em;

    border: 1px solid;
    border-style: dashed;
    border-radius: 5px;
    margin-bottom: 0.5em;
  }

  :global(.drag) {
    color: #efefef;
    background-color: #121212;
  }
</style>
