// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var ethereumjsWallet = require('ethereumjs-wallet');
var ProviderEngine = require("web3-provider-engine");
var WalletSubprovider = require('web3-provider-engine/subproviders/wallet.js');
var Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");
var Web3 = require("web3");
var FilterSubprovider = require('web3-provider-engine/subproviders/filters.js');

// create wallet from existing private key
var privateKey = '31d8f69538e17437ab5c91058442035af5a9321554d4c8f2359555e0a5a6c2a70';
var wallet = ethereumjsWallet.fromPrivateKey(new Buffer(privateKey, "hex"));
var address = "0x" + wallet.getAddress().toString("hex");

// using ropsten testnet
var providerUrl = "https://ropsten.infura.io/<your_access_token>";
var engine = new ProviderEngine();

// filters
engine.addProvider(new FilterSubprovider());
engine.addProvider(new WalletSubprovider(wallet, {}));
engine.addProvider(new Web3Subprovider(new Web3.providers.HttpProvider(providerUrl)));
engine.start(); // Required by the provider engine.

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    },
    kovan: {
           host: "localhost",
           port: 8545,
           network_id: "2",
           from: "0x4f81469516e000c459e3a8f8f7e1400a413cba0c", //your accont address.
           Gas: 1512388 // Gas you want to supply.
       },
    ropsten: {
           host: "localhost",
           port: 8545,
           network_id: "4",
           from: "0x4f81469516e000c459e3a8f8f7e1400a413cba0c", //your accont address.
           Gas: 4700036 // Gas you want to supply.
       },
    live: {
           host: "localhost",
           port: 8545,
           network_id: "1",
           from: "0x4f81469516e000c459e3a8f8f7e1400a413cba0c", //your accont address.
           Gas: 1512388 // Gas you want to supply.
       },
    infuraRopsten: {
          network_id: 3,    // Official ropsten network id
          provider: engine, // Use our custom provider
          from: address,   // Use the address we derived
          gas: 4600000     // Gas you want to supply.
    },
  }  
};
