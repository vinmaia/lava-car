import { Schema, model } from "mongoose";
import Cliente from "./cliente-model";

const veiculoSchema = new Schema({
  placa: {
    type: String,
    required: true,
    unique: true,
    maxLength: 7,
    minLength: 7,
  },
  nome: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    enum: ["MOTO", "CARRO", "VAN", "ONIBUS", "CAMINHÃO"],
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Cliente",
  },
});

const Veiculo = model("Veiculo", veiculoSchema);

export default Veiculo;
