const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(`Connected to ${x.connection.name}`);
  })
  .catch((error) => {
    console.log(error);
  });
