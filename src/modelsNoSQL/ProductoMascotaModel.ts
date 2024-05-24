import dynamodb from "../services/dynamoService";
import joi from "joi";
import { PREFIX_NAME } from "../config";

const ProductoMascotaModel = dynamodb.define("producto", {
  hashKey: "idProducto",
  timestamps: true,
  schema: {
    idProducto: dynamodb.types.uuid(),
    nombre: joi.string().required(),
    tipo: joi.string().required(),
    precio: joi.number().required(),
  },
  tableName: `Producto${PREFIX_NAME}`,
});

dynamodb.createTables(function (err) {
  if (err) {
    console.error("Error creating tables: ", err);
  } else {
    console.log("Table Producto has been created");
  }
});

export default ProductoMascotaModel;
