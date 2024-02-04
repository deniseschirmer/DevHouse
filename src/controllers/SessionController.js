//métodos : index,show,update,store,destroy
/*
index: listagem de sessões
store: criando uma nova sessão
show: Quando queremos listar uma ÚNICA sessão 
update: Quando queremos alterar alguma sessão
destroy: Quando queremos deletar alguma sessão
*/
import User from "../models/User";
class SessionController {
  async store(req, res) {
    const { email } = req.body; //const email = req.body.email;

    //Verificando se esse usuário já
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email });
    }
    return res.json(user);
  }
}
export default new SessionController();
