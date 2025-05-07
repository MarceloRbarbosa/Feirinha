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
  const { type } = req.query;
  if( type ){
   const tipoDeProduto = itens.filter(produto => {
        return produto.type.toLowerCase().includes(type.toLowerCase());
    });
   return  res.send(tipoDeProduto);
  }
    res.send(itens)
});

app.get("/items/:id", (req, res)=>{
    const id = req.params.id;
    const produto = itens.find(produto => {
        return produto.id === Number(id);
    })
    res.send(produto);
});

app.post("/items", (req,res) => {
    const produto = req.body;
    
    if(!produto.name || !produto.quantity || !produto.type) {
        return res.status(422).send("Alguma informação está inválida ou ausente");
    }

    const produtoExistente = itens.find(item => item.name === produto.name);
    if(produtoExistente){
        return res.status(409).send("Este produto já está na nossa lista da feirinha");
    }

    itens.push(
        {
            id: itens.length + 1,
        ...produto
    });
    res.status(201).send("Seu produto foi adicionado");
    
})



app.listen(5000, ()=>{
    console.log("Servidor está online na porta 5000")
});