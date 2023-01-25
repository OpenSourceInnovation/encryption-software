<script>
    import "../app.css";
    let text = '';
    let key = '';
    let algorithm = 'aes-256-cbc';
    let reposArrived=false
    let responseText=""
  
    function encrypt() {
      // TODO implement fetch
      responseText="ENCRYPTED TEXT"
      reposArrived = !reposArrived
    }

</script>

<div class="my-auto p-16 rounded-lg text-center">
  <input
      class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md" 
      bind:value={text}
      placeholder="Enter text to encrypt" />
  <input
    class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md" 
    bind:value={key}
    placeholder="Enter key"
  />
  
  <input bind:value={algorithm}
    class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md" 
    placeholder="Enter algorithm" 
  />  
  
  <button 
    class="mx-auto mt-4 py-3 px-12 font-semibold text-md rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
    on:click={encrypt}>Encrypt</button>

  {#if reposArrived }
    <input
      class="w-full my-8 px-6 py-4 text-xl rounded-lg border-0 focus:ring-2 focus:ring-gray-800 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-xl shadow-md" 
      bind:value={responseText}
      placeholder="Response Text Goes here "
    />
  {/if}
</div>

