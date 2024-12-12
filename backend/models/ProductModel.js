import mongoose from "mongoose";

//Creamos un Schema
const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, "Por favor ingrese un dato valido!"]
    },
    stock:{
        type: Number,
        required: [true, "Por favor ingrese un dato valido!"]
    },
    price:{
        type: Number,
        required: [true, "Por favor ingrese un dato valido!"]
    },
},
{
    timestamps:true,
    versionKey:false
}
);

//creamos model a partir del schema
export const ProductModel = mongoose.model("Product", productSchema)