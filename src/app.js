import express from "express";
import mongoose from "mongoose";
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
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
