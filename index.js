const { response } = require('express');
const app = express();
const cors = require('cors');
const routes = require("/routes");
const PORT  = process.env.PORT || 3033;

app.use(express.json());
app.use(cors());
routes(app);

module.exports = (app) => {
    app.get("/frania", (req, res) => {
        return res.send("Locadora da Frania!!!!!!!!!")
    })
}


// GET
// ('/locadoradefilmes') -> descrição
// ('/movies') -> listar todos os filmes
// ('/movies/:id') -> listar um filme por ID

// DELETE
// ('/movie/:id') -> deletar um filme por ID

// POST
// ('/movie/') -> adicionar um filme
// ('/movie/') -> alugar um filme




// app.route('movies')
// .get(movies.getAll)
// .post(movies.createOne)


// app.route('movies/:id')
// .get(movies.getOne)
// .put(movies.updateOne)
// .delete(movies.deleteOne)
