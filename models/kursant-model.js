const { Schema, model, Types } = require("mongoose"); //Типи та функції mongoose
const schema = new Schema({ //Модель курсанта
    modelName : {type: String, required : true}, // Ім'я, є обов'язковим полем
    lastNameKursant : {type: String, default : "Іванов"}, //Фамілія, за-замовчуванням "Іванов"
    age : { type : Number, min: 17 , required : true}, // Вік, мінімум вказати можна 17, є обов'язковим полем
    range : { type : String}, // Званння
    groupId : { type: Types.ObjectId, ref : "Groups"} // Ссилка на запис групи (зв'язок)
});

module.exports = model("Kursants", schema);