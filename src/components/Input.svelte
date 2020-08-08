<script>
  let name;
  export let label;
  export let id;
</script>

<style>
  input {
    width: 100%;
    height: 2em;
  }
  p {
    margin-bottom: 0.25em;
    color: #000428;
  }
</style>

<span {id}>{label}</span>
<input aria-labelledby={id} bind:value={name} />
