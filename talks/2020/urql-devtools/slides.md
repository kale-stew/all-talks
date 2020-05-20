# What is urql?

### **U** niversal **R** eact **Q** uery **L** anguage

- A lightweight client for GraphQL
- Meaning: you can use gql on the frontend 🎉

---

# What are urql devtools?

- An incredibly helpful [chrome extension](https://chrome.google.com/webstore/detail/urql-devtools/mcfphkbpmkbeofnkjehahlmidmceblmm?hl=en-US)!

---

# Features of urql-devtools

- 🔎 Cache exploration
- 🚀 Easily trigger requests directly from the client
- 🌐 Test your queries in the browser

---

# How do we set them up?

Install the devtools using your package manager of choice:

```sh
yarn add @urql/devtools
```

& then add the exchange to your urql client:

```js
import { createClient, defaultExchanges } from 'urql';
import { devtoolsExchange } from '@urql/devtools';

const client = createClient({
  url: 'http://localhost:3001/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges]
});
```
