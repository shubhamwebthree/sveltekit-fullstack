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
    <section>
    <button class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-8 rounded "
    on:click={createKeys}> Generate New Wallet Keys 
    </button> 
    <p class="mt-1 ml-2 px-1">Private Key WIF format : {WIF}</p>
    <p class="mt-1 ml-2 px-1">BitCoin Address : {address}</p>
    </section>  