require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food dad return saddle provide harvest muscle army gauge'; 
let testAccounts = [
"0x414f94954ef1825634510fa3dce50439731c98eef8bfa10fe80cfb7df11ce9dd",
"0x7513afb2676811b5309d7d194a22aa8baaddb041fd6247a4881c13934c233c1e",
"0x78962ab5da5e6c3bc2ed04bf091aebdfb3bd69c2df51e4cedd44a9d68731e901",
"0x10f21218661527083b256c5ec6e140bde7725286613d4e407212da2a96e24b45",
"0x06fe8525ddbdbe6287b4f9917359d3b8ac8e8e9356c164bb21584f4b1c64234d",
"0xefc81c35a98b50578da601d13442e5a67f0a2683b08aac0b8791400036862ce6",
"0xb77187b0efff36b460119fda30399e4f5452dd9d84193a14a595e4fe38a301b5",
"0xde7cc7447e5cc709612ea166f091e4107ffd418abd55f0f3edfa229fae533973",
"0x78c8d415cfffbca93bd1332c320147b27c3de8c4d020f592416ad3d72f31673c",
"0x35ad75d6a44abdfa810cc9c5a1733ed54b24793b87272e0c7b46b692afdcb1eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

