import mongoose from "mongoose";

export default function dbConnection(connectedCallBack) {
  const MONGO_URL = `mongodb://localhost:27017/usrImages`;
  mongoose.set("debug", true);
  mongoose.set("strictQuery", false);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(MONGO_URL)
    .then((c) => {
      console.log(`Connected to ${c.connection.db.databaseName}`);
      connectedCallBack();
    })
    .catch((err) => console.error(err));
}
