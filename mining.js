'use strict';
module.exports = function mining(bitcoin) {
    const lastBlock = bitcoin.getLastBlock();
    const previousHash = lastBlock.currentHash;
    const transactionData = bitcoin.transactionPool;
    const nonce = bitcoin.proofOfWork(previousHash, transactionData);
    const currentHash = bitcoin.createHash(nonce, previousHash, transactionData);
    bitcoin.createNewBlock(nonce, previousHash, currentHash);
};