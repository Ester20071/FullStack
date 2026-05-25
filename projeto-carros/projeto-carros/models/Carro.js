//RENOMEAR ARQUIVO
// Campos do banco de dados do carro
const mongoose = require('mongoose');
//TROCAR carroSchema para algoSchema
const carroSchema = new mongoose.Schema({
  //TROCAR CAMPOS DENTRO DO SCHEMA
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  ano: { type: Number, required: true },
  qtde_disponivel: { type: Number, required: true, default: 0 }
});
//mudar nome de uma colecao Troca 'Carro' pelo nome novo -> module.exports = mongoose.model('Veiculo', carroSchema);
module.exports = mongoose.model('Carro', carroSchema);
