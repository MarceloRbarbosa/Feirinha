import express, {json} from "express"

const app = express();
app.listen(5000, ()=>{
    console.log("Servidor está disponível na porta 5000")
});