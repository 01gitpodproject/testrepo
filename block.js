// Klasse

class Block{

        constructor(timestamp,lastHash,hash,data){
            this.timestamp = timestamp; // Zeitstempel
            this.lastHash = lastHash; // Hash des vorhergehenden Block
            this.hash = hash; // Eigener Hash
            this.data = data; // Daten
            
        }

        toString(){ // für Debugging-Zwecke
            return `    Block -
                Timestamp: ${this.timestamp}
                Last Hash: ${this.lastHash}
                Hash:      ${this.hash}
                Data:      ${this.data}
            `
        }

        static genesis(){ // 1. Block der chain
            return new this("Genesis time", "-----", "xABC1234", ["data1", "data2"]); //call constructor
        }

        static mineBlock(lastBlock, ownData){ // weitere Blocks in der Chain
            const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
            const lastHash  = lastBlock.hash; // HASH-Wert des Vorgängers
            const hash      = "Hash to Do";

            // dazwischen liegt der Miningaufwand....Energie!!! / Zeit vergeht
            // Sicher(er) wie Fort Knox!

            return new this(timestamp, lastHash, hash, ownData);
        }

}

module.exports = Block; // Export al Modul