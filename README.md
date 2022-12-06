# Installation
1. Node.js
2. Truffle: 
   - *$ npm install -g truffle*
3. TestRPC:
   - *$ npm install -g ethereumjs-testrpc*

# Running the todo_dapp
1. Build the npm dependencies:
    - *$ npm install*
2. Run TestRPC
    - *$ testrpc*
3. Compile the contracts
    - *$ truffle compile*
4. Deploy contracts to the Ethereum blockchain
    - *$ truffle migrate --network option*
    option==
   - development - for local test network
   - ropsten - for Ropsten test network
   - live - for Ethereum Main net
   - kovan - for Kovan test network
5. Running the Dapp
    - *$ npm run dev*
