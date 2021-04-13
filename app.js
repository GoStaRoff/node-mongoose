const config = require("config");
const mongoose = require("mongoose"); //Імпорт бібліотеки mongoose
const start = require("./console");

const connect = async () => {
    try {
        await mongoose.connect(config.get("mongoUri"), {  // Підключення
          useNewUrlParser: true,                          // до бази
          useUnifiedTopology: true,                       // даних
          useCreateIndex: true,
        });
        console.log('Connection succesfully!'); // Вивід при успішному піключенні
        start();                               
      } catch (error) {
        console.log("DB error : ", error.message); // Вивід при помилці
        process.exit(1);
      }
}

connect();  