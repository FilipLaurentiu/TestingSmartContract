const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts','Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');


var jsonContractSource = {
    language: 'Solidity',
    sources: 
    
    {
        'Inbox': {
            content: source,
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}

compiledContract = JSON.parse(solc.compile(JSON.stringify(jsonContractSource)));
module.exports = compiledContract.contracts.Inbox.Inbox;

