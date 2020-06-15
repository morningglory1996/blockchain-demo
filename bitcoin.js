'use strict';
const sha256 = require('sha256');

module.exports = class Bitcoin {
    constructor() {
        this.blockChain = [];
        this.transactionPool = [];
        this.createGenesisBlock();
    }

    createGenesisBlock() {
        const nonce = this.proofOfWork('', '');
        const currentHash = this.createHash(nonce, '', '');
        this.createNewBlock(nonce, '', currentHash);
    }

    createNewBlock(nonce, previousHash, currentHash) {
        const newBlock = {
            index: this.blockChain.length + 1,
            timestamp: new Date(),
            transactionData: this.transactionPool,
            nonce: nonce,
            previousHash: previousHash,
            currentHash, currentHash
        };

        this.blockChain.push(newBlock);
        this.transactionPool = [];
    }

    createNewTransaction(amout, sender, recipient) {
        const newTransaction = {
            amout: amout,
            sender: sender,
            recipient: recipient
        }

        this.transactionPool.push(newTransaction);
    }

    createHash(nonce, previousHash, trasactionData) {
        const dataString = nonce.toString() + previousHash + JSON.stringify(trasactionData);
        const currentHash = sha256(dataString) ;
        return currentHash;
    }

    proofOfWork(previousHash, trasactionData) {
        let nonce = 0;
        let currentHash = this.createHash(nonce, previousHash, trasactionData);
        while(currentHash.substring(0, 4) !== '0000') {
            nonce ++;
            currentHash = this.createHash(nonce, previousHash, trasactionData);
        }
        return nonce;
    }

    getLastBlock() {
        return this.blockChain[this.blockChain.length -1];
    }

    
}


