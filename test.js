const Bitcoin = require('./bitcoin');
const mining = require('./mining')
const bitcoin = new Bitcoin();
bitcoin.createNewTransaction(1, 'BOB', 'ALICE');
mining(bitcoin);
bitcoin.createNewTransaction(2, 'SAM', 'LUCY');
mining(bitcoin);
bitcoin.createNewTransaction(3, 'JOHN', 'LISA');
mining(bitcoin);
console.log(bitcoin.blockChain);







