require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note oval common grace hen equal gas'; 
let testAccounts = [
"0x95dcd994151f6915ddbe4a87ef95fc7f1b9158201c40d2b277aae0d5369a5411",
"0x994d4151838115d0b27947e4e6a4ee347e1cba6bad4ce7e15c7b09d5e90ca092",
"0x4c4385ebbdfbfb82ffbfe143e505123e93ce69415ed6dd3802d1316f94f81086",
"0x9ec8103748a5e5c8e3964ae9533a2e10bdba5284b658966c4280b4458caca38c",
"0xce72c98a4615d7f748bc75a189e1eb64be1470f735fbbfe0dfb82e89fec62632",
"0xb9f85bb349979ab8bfbfa94f4bf003d22e0ca8b6fb457190329c6dab8e65a4ca",
"0xf4180a1ffb9b286b245225213abb36744c1b9239f1d63fa145bb6c2821682165",
"0x3095436e91942d203d96cb75c424617287ef03375808aacf13fef3980084bed3",
"0x47cdaee00bf5416d737e8040947014de9bc6aa3ae08379a9994057ccdecef12a",
"0xf6242ffc3799062fd2e67b80ab90f4190863002aec181379ab9a7c242651bb81"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
