import express  from "express";
import cors from "cors";
import tareasRoutes from './routes/tareas.routes.js'
import indexRoutes from './routes/index.routes.js'

const app=express();
app.use(express.json())
app.use(cors()); 


app.use(indexRoutes);
app.use(tareasRoutes);
app.use((req, res, next)=>{
res.json({
    "mensaje":"no sé encontró la petición al servidor"
})
})

export default app;