const config = require("config");
const Kursants = require("./models/kursant-model");
const Groups = require("./models/group-model");
const Faculties = require("./models/faculty-model");

const start = async () => {
  const prompt = require("prompt-sync")();
  while (true) {
    let choosenTable;
    console.log(config.get("tablesLog"));
    while (!choosenTable) {
      const choosenTableIndex = prompt("Index of table : ");
      switch (choosenTableIndex) {
        case "1":
          choosenTable = Kursants;
          break;
        case "2":
          choosenTable = Groups;
          break;
        case "3":
          choosenTable = Faculties;
          break;
        default:
          break;
      }
    }
    let methodIndex;
    while (methodIndex != 0) {
      console.clear();
      let items = await choosenTable.find();
      items.forEach((el) => {
        console.log(el);
      });
      console.log(config.get("methodsLog"));
      methodIndex = prompt("Index of method : ");
      let modelName;
      let res;
      let id;
      switch (methodIndex) {
        case "1":
          modelName = prompt("Введіть назву для видалення : ");
          res = await choosenTable.deleteOne({ modelName });
          console.log(res);
          console.log("Видалено по назві");
          break;
        case "2":
          items = await choosenTable.find();
          items.forEach((el) => {
            console.log(el);
          });
          console.log("Усі записи у таблиці");
          break;
        case "3":
          id = prompt(" ID : ");
          res = await choosenTable.findById(id);
          console.log(res);
          console.log("Знайдено по ID");
          break;
        case "4":
          id = prompt(" ID : ");
          res = await choosenTable.findByIdAndDelete(id);
          console.log(res);
          console.log("Знайдено по ID та видалено");
          break;
        case "5":
          id = prompt(" ID : ");
          res = await choosenTable.findByIdAndRemove(id);
          console.log(res);
          console.log("Знайдено по ID та видалено");
          break;
        case "6":
          id = prompt(" ID : ");
          modelName = prompt("new Name : ");
          res = await choosenTable.findByIdAndUpdate(id, { modelName });
          console.log(res);
          console.log("Знайдено по ID та обновлено назву");
          break;
        case "7":
          modelName = prompt("Введіть назву : ");
          res = await choosenTable.findOne({ modelName });
          console.log(res);
          console.log("Знайдено по назві");
          break;
        case "8":
          modelName = prompt("Введіть назву : ");
          res = await choosenTable.findOneAndDelete({ modelName });
          console.log(res);
          console.log("Знайдено по назві та видалено");
          break;
        case "9":
          modelName = prompt("Введіть назву : ");
          res = await choosenTable.findByIdAndRemove({ modelName });
          console.log(res);
          console.log("Знайдено по назві та видалено");
          break;
        case "10":
          modelName = prompt("Введіть назву : ");
          res = await choosenTable.findOneAndUpdate({ modelName });
          console.log(res);
          break;
        case "11":
          modelName = prompt("Введіть назву : ");
          res = await choosenTable.replaceOne({ modelName });
          console.log(res);
          break;
        case "12":
          modelName = prompt("Введіть назву : ");
          res = await choosenTable.updateOne({ modelName });
          console.log(res);
          break;
        default:
          break;
      }
      prompt("Натисніть ENTER щоб продовжити");
    }
    console.clear();
  }
};

module.exports = start;
