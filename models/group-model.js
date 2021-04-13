const { Schema, model, Types } = require("mongoose"); //Типи та функції mongoose
const schema = new Schema({ //Модель групи
    modelName : { type: String, required : true}, // Назва групи, є обов'язковим полем
    facultyId : { type: Types.ObjectId, ref: "Faculties"} // Ссилка на запис факультету (зв'язок)
});

module.exports = model("Groups", schema);