const Colors = artifacts.require("./Colors.sol");

contract("Colors", (accounts) => {
    let contract;

     before(async() => {
         contract = await Colors.deployed();
     })
    describe("deployment", async () => {
        it("deploy successfully", async () => {
            contract = await Colors.deployed()
            const address = contract.address
            console.log(address)
             assert.notEqual(address, 0x0);
             assert.notEqual(address, "");
             assert.notEqual(address, undefined);
             assert.notEqual(address, null)
        })
         it("has a name", async () => {
             const name = await contract.name()
             assert.equal(name, "Colors");
         })
         it("has a symbol", async () =>{
             const symbol = await contract.symbol()
             assert.equal(symbol, "CO");
         })
     })
     describe("miting", async () => {
         it("creates a new token", async () => {
             const result = await contract.mint("#EC058E")
             const totalSupply = await contract.totalSupply()
             assert.equal(totalSupply, 1)
         })
     })
})
