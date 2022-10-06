import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/user.routes"
import handleAppErrorMiddeware from "./middlewares/handleAppError.middleware"
import addressRoutes from "./routes/adress.routes"
// import loginRoutes from "./routes/login.routes"
// import contactRoutes from "./routes/contact.routes"

const app = express()
app.use(express.json())

app.use('/usuarios', userRoutes)
app.use('/enderecos-usuario', addressRoutes)

app.use(handleAppErrorMiddeware)

app.listen(3333, () => {
    console.log("Servidor executando")
})