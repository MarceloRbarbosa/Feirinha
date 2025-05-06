import express, {json} from "express"

const app = express();

app.get("/items", (req, res)=>{
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
    res.send(itens)
})



app.listen(5000, ()=>{
    console.log("Servidor está online na porta 5000")
});