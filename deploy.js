const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledContract = require('./compile');
const interface = compiledContract.abi;
const bytecode = compiledContract.evm.bytecode.object;


const provider = new HDWalletProvider(
    'mnemonic',
    `infura url`
    );

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from accounts ', accounts[0]);

    const result = await new web3.eth.Contract(interface)
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ from: accounts[0], gas: '1000000' });
    console.log('Contract deployed to ', result.options.address);
};

deploy();
