const { Schema, model } = require("mongoose"); //Типи та функції mongoose
const schema = new Schema({ //Модель факультету
    modelName : { type: String, default: "Факультет №0"}, //Назва факультету (по-замовчуванню "Факультет №0")
});

module.exports = model("Faculties", schema);