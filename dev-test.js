// call: npm run dev-test

// import
const  Block = require("./block");
const Blockchain = require("./blockchain")

//const block = new Block("time", "hash1", "hash2", "irgendwas")
//console.log(block.toString());

//console.log(Block.genesis().toString());

//const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
//console.log(testBlock.toString());

/** Test der Blockchain-Funktionalität */

const chain = new Blockchain();
console.log(chain);

chain.addBlock("daten von Block 1");
console.log(chain);
chain.addBlock("daten von Block 2");
console.log(chain);
chain.addBlock("daten von Block 3");
console.log(chain);
chain.addBlock("daten von Block 4");
console.log(chain);