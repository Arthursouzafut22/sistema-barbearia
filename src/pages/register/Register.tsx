import * as S from "./Styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <S.Section>
      <S.FormRegister>
        <fieldset>
          <h2>Registre-se</h2>
          <p>Informe seus dados e crie uma conta.</p>
        </fieldset>
        <fieldset>
          <Input
            label="Nome"
            name={"Nome"}
            type={"text"}
            placeholder={"Informe seu nome"}
          />
        </fieldset>
        <fieldset>
          <Input
            label="E-mail"
            name={"E-mail"}
            type={"email"}
            placeholder={"seuemail@email.com"}
          />
        </fieldset>
        <fieldset>
          <Input label="Senha" name={"Senha"} type={"password"} />
        </fieldset>
        <fieldset>
          <Input
            label="Confirme a senha"
            name={"Confirme a senha"}
            type={"password"}
          />
        </fieldset>
        <Button marginTop={"10px"} text={"Entrar"} />
        <p className={"conta"}>
          Já possui uma conta? <Link to={"/login"}>Entrar</Link>
        </p>
      </S.FormRegister>
    </S.Section>
  );
};

export default Register;
