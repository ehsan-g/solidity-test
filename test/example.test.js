const assert = require('assert');
const ganache = require("ganache-cli");
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const { abi, evm } = require('../compile');

const bytecode = evm.bytecode.object;


let accounts;
let address;
let myContract;

beforeEach( async() => {
    // Get the local accounts
    accounts = await web3.eth.getAccounts();
    [address] = accounts;
    myContract = new web3.eth.Contract(abi, accounts[0], {
        from: accounts[0], // default from address
        gasPrice: '200000000' // default gas price in wei, 20 gwei in this case
    });
    myContract
    .deploy({
        data: bytecode,
        arguments: [123, accounts[0]]
    })
    .send({
        from:  accounts[0],
        gas: 1500000,
        gasPrice: '30000000000'
    })
})

describe('myContract', () => {
    it('deploys the contract', async() => {
        assert.ok(myContract.options.address)
    })

    it('Should be able to set up the constructor auction', async () => {
        const x =  await myContract.methods.highestBid()
        console.log(x)
        
        // assert.strictEqual(await myContract.methods.beneficiary(), accounts[0], 'The owner is not set correctly')

      })  
})