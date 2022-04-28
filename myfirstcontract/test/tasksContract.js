const TaskContract = artifacts.require("TaskContract")

contract("TaskContract", () => {

     before( async () => {
        this.tasksContract = await TaskContract.deployed()
     })

     it("migrate deployed successfully", async () => {
         const address = this.tasksContract.address
        assert.notEqual(address, null)    
        assert.notEqual(address, undefined)  
        assert.notEqual(address, 0x0)  
        assert.notEqual(address, "")  
    }) 

    it("get Tasks List", async () => {
       const taskCounter = await this.tasksContract.taskCounter()
       const task = await this.tasksContract.tasks(taskCounter)

       assert.equal(task.id.toNumber(), taskCounter)
       assert.equal(task.title, "mi primer tarea de ejemplo");
       assert.equal(task.description, "tengo que hacerla");
       assert.equal(task.done, false);
       assert.equal(taskCounter, 1);
    });

    it("task create successfully", async () => {
        const result = await this.tasksContract.createTask("some task", "description two");
        const taskEvent = result.logs[0].args;
        const taskCounter = await this.tasksContract.taskCounter()
        assert.equal(taskEvent.id.toNumber(), 2)
        assert.equal(taskEvent.title, "some task");
        assert.equal(taskEvent.description, "description two");
        assert.equal(taskEvent.done, false);
        assert.equal(taskCounter, 2);
     }) ;
     it("task toggle done", async () => {
        const result = await this.tasksContract.toggleDone(1);
        const taskEvent = result.logs[0].args;
        const task = await this.tasksContract.tasks(1);

        assert.equal(task.done, true);
        assert.equal(taskEvent.done, true);
        assert.equal(taskEvent.id, 1)
     });
})