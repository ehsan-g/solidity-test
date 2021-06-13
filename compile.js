const path = require('path');
const fs = require('fs');
const solc = require('solc');
const myContractPath = path.resolve(__dirname, 'contracts', 'example.sol')
const source = fs.readFileSync(myContractPath, 'utf8')

const input = {
    language: 'Solidity',
    sources: {
      'example.sol': source
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
  const output = JSON.parse(solc.compile(JSON.stringify(input)));
  
  // `output` here contains the JSON output as specified in the documentation
  for (const contractName in output.contracts['example.sol']) {
    console.log(
      contractName +
        ': ' +
        output.contracts['example.sol'][contractName].evm.bytecode.object
    );
  }