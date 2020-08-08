<script>
  import Input from "../components/Input.svelte";
  import FileUpload from "../components/FileUpload.svelte";
  import Button from "../components/Button.svelte";
</script>

<style>
  h1 {
    text-align: center;
    margin: 0 auto;
    color: #004e92;
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  .ButtonWrap {
    margin-top: 2em;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Housing Search</title>
</svelte:head>
<h1>Housing Search</h1>

<form>
  <Input id="address-input" label="Address" />

  <Input id="price-input" label="Price" />

  <Input id="sq-ft-input" label="Square feet" />

  <Input id="link-input" label="Link" />

  <Input id="icty-input" label="City" />

  <FileUpload />

  <div class="ButtonWrap">
    <Button />
  </div>
</form>
