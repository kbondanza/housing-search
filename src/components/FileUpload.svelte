<script>
  let files;
</script>

<style>
  .FileUpload {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }
  .FileUpload-input {
    width: 100%;
    max-width: 400px;
    height: 100px;
    border-radius: 8px;
    border: 2px dashed #004e92;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="FileUpload">
  <input class="FileUpload-input" type="file" bind:files />
</div>

{#if files && files[0]}
  <p>{files[0].name}</p>
{/if}
