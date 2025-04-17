const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API online com sucesso!');
});

// Aqui vem as outras rotas...

// 🔴 IMPORTANTE: NÃO use app.listen no Vercel!
// app.listen(3000, () => console.log("Rodando..."));

// ✅ Exporta o app para o Vercel usar
module.exports = app;
