//métodos : index,show,update,store,destroy
/*
index: listagem de sessões
store: criando uma nova sessão
show: Quando queremos listar uma ÚNICA sessão 
update: Quando queremos alterar alguma sessão
destroy: Quando queremos deletar alguma sessão
*/
import User from "../models/User";
import * as Yup from "Yup";
class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
    });

    const { email } = req.body; //const email = req.body.email;

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Falha na validação." });
    }

    //Verificando se esse usuário já existe
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  }
}
export default new SessionController();
