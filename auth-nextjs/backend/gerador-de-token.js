const jwt = require('jsonwebtoken')

const SECRET_KEY = '21390123g2hb3183g1293132g13102i dewid88ked1g23g219evdvq7 asdasdwdg71232'

const nossoToken = jwt.sign(
  {
    name: 'Raphael'
  },
  SECRET_KEY,
  {
    expiresIn: '1y',
    subject: '1'
  }
);

const TOKEN_GERADO = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmFwaGFlbCIsImlhdCI6MTcwNTc5MzMxMiwiZXhwIjoxNzM3MzUwOTEyLCJzdWIiOiIxIn0.tdBKMhzl1ZuCfX5n9f0LEJPvj7LbZ93fZikVCIz5WVs';

// npx nodemon gerador-de-token.js
console.log(nossoToken)
// console.log(jwt.verify(TOKEN_GERADO, SECRET_KEY))
console.log(jwt.decode(nossoToken))
