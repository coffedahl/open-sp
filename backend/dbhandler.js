const Surreal = require('surrealdb.js').default;
const db = new Surreal('http://localhost:8000/rpc');
module.exports = {
    addRun: async function (storenumber) {
        await db.signin({
            user: "root",
            pass: "root"
        })

        await db.use('test', 'test')

        let create = await db.create("run", {
            store: storenumber,
            time: new Date()
        })
        return (create[0])
    },
    getAll: async function () {
        await db.signin({
            user: "root",
            pass: "root"
        })
        await db.use('test', 'test');
        let data = await db.query("SELECT * FROM run;");
        return (data[0])
    },
    delete: async function () {
        await db.signin({
            user: "root",
            pass: "root"
        })
        await db.use('test', 'test')
        let query = await db.query("DELETE run")
    }
};
