import express, {json} from "express";


const app = express();
app.use(json());

const itens = [
    {
        id:1,
        name: "maçã",
        quantity: 2,
        type:"fruta"

    },
    {
        id:2,
        name: "peito de frango congelado",
        quantity:1,
        type:"carne"
    }
]


app.get("/items", (req, res)=>{
    res.send(itens)
});

app.get("/items/:id", (req, res)=>{
    const id = req.params.id;
    const produto = itens.find(produto => {
        return produto.id === Number(id);
    })
    res.send(produto);
});

app.post("/items", (req,res)=> {
    const produto = req.body;
    itens.push(
        {
            id: itens.length + 1, 
        ...produto
    });
    res.send ("Seu produto foi adicionado")

})



app.listen(5000, ()=>{
    console.log("Servidor está online na porta 5000")
});