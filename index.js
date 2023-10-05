/* index.js */
const express = require('express')
const mongoose = require('mongoose')
const Location = require('./models/Location')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())
app.post('/localizacao', async (req, res) => {
    const { nome, localizacao } = req.body
    const Localizacao = {
      nome,
      localizacao
    }
    try {
      await localizacao.create(localizacao)
      res.status(201).json({ message: 'Local inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  app.get('/localizacao', async (req, res) => {
    try {
      const localizacao = await localizacao.find()
      res.status(200).json(localizacao)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })  

  app.get('/localizacao/:id', async (req, res) => {
    const id = req.params.id
    try {
      const localizacao = await localizacao.findOne({ _id: id })
      if (!localizacao) {
        res.status(422).json({ message: 'Local não encontrado!' })
        return
      }
      res.status(200).json(localizacao)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  app.patch('/localizacao/:id', async (req, res) => {
    const id = req.params.id
    const {nome, localizacao } = req.body
    const Localizacao = {
      nome,
      localizacao
    }
    try {
      const updatedlocalizacao = await localizacao.updateOne({ _id: id }, localizacao)
      if (updatedlocalizacao.matchedCount === 0) {
        res.status(422).json({ message: 'Local não encontrado!' })
        return
      }
      res.status(200).json(localizacao)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  app.delete('/localocalizacaotion/:id', async (req, res) => {
    const id = req.params.id
    const localizacao = await localizacao.findOne({ _id: id })
    if (!localizacao) {
      res.status(422).json({ message: 'Local não encontrado!' })
      return
    }
    try {
      await localizacao.deleteOne({ _id: id })
      res.status(200).json({ message: 'Local removido com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  }) 
app.get("/", (req, res) => {  //criando a rota - endpoint
    res.json({ message: "Oi Express!" });
  });
  mongoose
  .connect(
    'mongodb+srv://britesduarte:aguagelada@math.y7uj2ay.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))


