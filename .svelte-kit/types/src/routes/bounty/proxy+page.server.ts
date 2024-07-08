// @ts-nocheck
import { DefaultProvider, sha256, bsv, toByteString } from 'scrypt-ts'
import { Root } from "$lib/../contracts/root"
import { NeucronSigner } from 'neucron-signer'

async function main() {
    const provider = new DefaultProvider({ network: bsv.Networks.mainnet })
    const signer = new NeucronSigner(provider)
    let instance
    await signer.login('sales@timechainlabs.io', 'string')
    await Root.loadArtifact()
  
}

main()

/** */

export  const actions = {

    deploy:/** @param {import('./$types').RequestEvent} event */  async ({ request }) => {
     
        const square = BigInt(data.get('square'))
        const instance = new Root(square)
        await instance.connect(signer)
    
        const deployTx = await instance.deploy(data.get('amount'))
        console.log(
            'smart lock deployed : https://whatsonchain.com/tx/' + deployTx.id
        )
        return { success: true, tx :deployTx.id };
    },

    unlock:/** @param {import('./$types').RequestEvent} event */ async ({ request }) => {
      
        const root = data.get('root')
    await new Promise((f) => setTimeout(f, 5000))
    const { tx: callTx } = await instance.methods.unlock(root)
    console.log(
        'contract unlocked successfully : https://whatsonchain.com/tx/' +
            callTx.id
    )
    return { success: true };
    };