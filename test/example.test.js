const assert = require('assert');
const ganache = require("ganache-cli");
var Web3 = require('web3');
const web3 = new Web3(ganache.provider());
web3.setProvider(ganache.provider());

const { abi, evm } = require('../compile.js')
const bytecode = evm.bytecode.object

var Contract = require('web3-eth-contract');

let accounts;
let address;
let myContract;

beforeEach( async() => {
    // Get the local accounts
    accounts = await web3.eth.getAccounts()
    address = accounts[0]
    myContract = new web3.eth.Contract(abi, address, {gasPrice: '12345678', from: accounts[0]});
})

describe('myContract', () => {
    it('deploys the contract', () => {
        assert.ok(myContract.options.address)
    })
})