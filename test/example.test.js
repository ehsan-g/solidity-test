const assert = require('assert');
const ganache = require("ganache-cli");
var Web3 = require('web3');
const web3 = new Web3(ganache.provider());
web3.setProvider(ganache.provider());

let accounts;

beforeEach( async() => {
    // Get the local accounts
    const accounts = await web3.eth.getAccounts()
    console.log(accounts)
})

describe('myContract', () => {
    it('deploys the contract', ()=>{
        
    })
})