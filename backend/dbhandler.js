// Import SurrealDB
const Surreal = require("surrealdb.js").default;
const db = new Surreal("http://10.5.0.7:8000/rpc");
// Functions accesable from the outside
module.exports = {
  // Function for adding a run to the db
  addRun: async function (storenumber, runtype) {
    await db.signin({
      user: "root",
      pass: "root",
    });
    await db.use("test", "test");
    let create = await db.create("run", {
      store: storenumber,
      time: new Date(),
      type: runtype,
    });
  },
  // Function for getting all the runs from db
  getAll: async function () {
    await db.signin({
      user: "root",
      pass: "root",
    });
    await db.use("test", "test");
    let data = await db.query("SELECT * FROM run;");
    return data[0];
  },
  /**
   * Function for getting all runs in priceadjustment
   */
  getPrice: async function () {
    await db.signin({
      user: "root",
      pass: "root",
    });
    await db.use("test", "test");
    let data = await db.query("SELECT * FROM run WHERE type = 'price';");
    return data[0];
  },
  //Function for getting all runs made in shipment
  getShipment: async function () {
    await db.signin({
      user: "root",
      pass: "root",
    });
    await db.use("test", "test");
    let data = await db.query("SELECT * FROM run WHERE type = 'shipment';");
    return data[0];
  },
  // Function to delete all the runs from db
  delete: async function () {
    await db.signin({
      user: "root",
      pass: "root",
    });
    await db.use("test", "test");
    let query = await db.query("DELETE run");
  },
};
