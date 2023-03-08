// Import SurrealDB
const Surreal = require('surrealdb.js').default;
const db = new Surreal('http://localhost:8000/rpc');
// Functions accesable from the outside
module.exports = {
    // Function for adding a run to the db
    addRun: async function (storenumber, runtype) {
        await db.signin({
            user: "root",
            pass: "root"
        })
        await db.use('test', 'test')
        let create = await db.create("run", {
            store: storenumber,
            time: new Date(),
            type: runtype
        })
    },
    // Function for getting all the runs from db
    getAll: async function () {
        await db.signin({
            user: "root",
            pass: "root"
        })
        await db.use('test', 'test');
        let data = await db.query("SELECT * FROM run;");
        return (data[0])
    },
    // Function to delete all the runs from db
    delete: async function () {
        await db.signin({
            user: "root",
            pass: "root"
        })
        await db.use('test', 'test')
        let query = await db.query("DELETE run")
    }
};
