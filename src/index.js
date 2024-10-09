import e from "express";
import "dotenv/config.js";

import cliente_route from "./routes/cliente-route.js";
import veiculo_route from "./routes/veiculo-route.js";

const app = e();

app.use(e.json());

app.use("/cliente", cliente_route);
app.use("/veiculo", veiculo_route);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando"));
