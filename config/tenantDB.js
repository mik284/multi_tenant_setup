const { connect } = require("./db-connection");
const mongoose = require("mongoose");
const url = "mongodb+srv:"; // connection string for your database for tenant
let db;
const customerSchema = new mongoose.Schema(
  {
    customerName: String,
  },
  { timestamps: true }
);

const customerModel = mongoose.model("customers", customerSchema);

const getTenantDB = async (tenantId) => {
  const dbName = `tenant-${tenantId}`;
  db = db ? db : await connect(url);
  let tenantDb = db.useDb(dbName, { useCache: true });
  return tenantDb;
};

const getCustomerModel = async (tenantId) => {
  const tenantDb = await getTenantDB(tenantId);
  return tenantDb.model("customers", customerSchema);
};

module.exports = {
  getCustomerModel,
};
