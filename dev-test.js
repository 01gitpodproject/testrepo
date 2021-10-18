// call: npm run dev-test

// import
const  Block = require("./block");

//const block = new Block("time", "hash1", "hash2", "irgendwas")
//console.log(block.toString());

console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
console.log(testBlock.toString());