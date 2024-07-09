<script>
    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<div
  class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"
>
  <form method="POST" action="?/login">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="paymail"
        >
          Paymail
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-35 h-15"
          id="paymail"
          type="text"
          placeholder="Enter Paymail"
          name="email"
        />
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="paymail"
        >
          Password
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-35 h-15"
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
      </div>

      <button
        type="submit"
        class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-4 rounded w-40 "
      >
        LogIn
      </button>
    </div>
  </form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">Logged In. Your Balance is {form?.balance}</p>
  {/if}
</div>

<div class="mt-10 pt-10 w-full max-w-xl p-10 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">

<form method="POST" action="?/pay">
    <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pb-1"
            for="paymail"
          >
            Paymail
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-35"
            id="paymail"
            type="text"
            placeholder="Enter Paymail"
            name="email"
          />
        </div>
        
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pb-1"
              for="paymail"
            >
              Password
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 w-35"
              id="password"
              type="password"
              placeholder="Enter Password"
              name="password"
            />
          </div>
    <!-- <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Email
          </label>
        </div> -->

    <div class="flex flex-wrap mb-0">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
        for="paymail"
      >
        Recipient Paymail
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="paymail"
        type="text"
        placeholder="Enter Recipient Paymail"
        name="email"
      />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
        for="amount"
      >
        Note
      </label>
      <input
        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="note"
        type="note"
        placeholder="Enter Note"
        name="note"
      />
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-2"
          for="amount"
        >
          Amount
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="amount"
          type="amount"
          placeholder="Enter Amount"
          name="amount"
        />
      </div>
    </div>
    
    <button
      type="submit"
      class = "bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 px-4 py-2 rounded w-full"
      >
      Pay
    </button>
</div>
</form>
  {#if form?.success}
    <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
    <p class="pt-2">The Payment was successful. Here is your <a href="https://whatsonchain.com/tx/{form?.payment}"><p class="text-decoration-line: underline hover:text-blue-900
">Transaction</p></a></p>
  {/if}
</div>