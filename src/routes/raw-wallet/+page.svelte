<script lang="ts">
    import { PrivateKey } from '@bsv/sdk'

    let WIF:string
    let address:string
    
    function createKeys () {
    const privkey = PrivateKey.fromRandom()
    WIF = privkey.toWif()
    console.log("Private Key WIF format is", WIF)
    address = privkey.toAddress()
    console.log("Your bitcoin address is", address)
    }
    </script>

    <div
    class="mt-36 pt-12 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
    >
    <section>
    <!-- <div class="flex flex-wrap -mx-3 mb-2"> -->
    <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"> -->
    <h2 class="font-bold mt-1 ml-2 px-1">Public Key :-</h2> 
    <p class="mt-1 ml-2 px-1"> {address}</p>
    <h2 class="font-bold mt-1 ml-2 px-1">Private Key :-</h2> 
    <p class="mt-1 ml-2 px-1"> {WIF}</p>
    

    <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-32 rounded "
        on:click={createKeys}> Generate New Wallet Keys 
    </button> 
    <!-- </div> -->
    <!-- </div> -->
    </section>  
    </div>