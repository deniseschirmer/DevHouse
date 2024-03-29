import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    mongoose
      .connect(
        "mongodb+srv://devhouse:devhouse@cluster0.dwhfcqz.mongodb.net/seu-banco-de-dados",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("Conexão MongoDB estabelecida com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao conectar ao MongoDB:", err);
      });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors()); //Qualquer pessoa consegue fazer requisições na nossa api
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
