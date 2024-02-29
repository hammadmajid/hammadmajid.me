<script lang="ts">
  export let name: string;
  export let type: 'text' | 'textarea' | 'email';
  export let placeholder: string;
  export let label: string;
  export let required: boolean;
</script>

<label for={label}> </label>
{#if type === 'text' || type === 'email'}
  <input
    {type}
    {required}
    {placeholder}
    {name}
    class="p-2 rounded-sm outline outline-2 outline-slate-800 md:w-2/5"
  />
{:else if type === 'textarea'}
  <textarea
    {name}
    {required}
    {placeholder}
    class="p-2 rounded-sm outline outline-2 outline-slate-800 md:w-2/5 h-max"
  />
{/if}
