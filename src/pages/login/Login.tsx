import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Colors } from "../../styles/Colors";
import * as S from "./Styles";
import { useForm } from "react-hook-form";
import { Schema } from "./Schema/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

interface ILogin {
  ["E-mail"]: string;
  ["Senha"]: string;
}

const Login = () => {
  const [password, setPassword] = useState(false);
  const { register, handleSubmit } = useForm<ILogin>({
    resolver: yupResolver(Schema),
  });

  const loginSubmit = async (data: ILogin) => {

    try {
      const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (resposta.ok) {
        console.log("Login efetuado com sucesso!");
      }

      const json = await resposta.json();
      console.log(json);

      return json;
    } catch (erro) {
      console.log("Erro ao fazer login", erro);
    }
  };

  return (
    <S.Section>
      <S.FormLogin onSubmit={handleSubmit(loginSubmit)}>
        <fieldset>
          <h2>Login</h2>
          <p>Entre com seu e-mail e senha para acessar sua conta.</p>
        </fieldset>

        <fieldset>
          <Input
            {...register("E-mail", { required: true })}
            label="E-mail"
            name={"E-mail"}
            type={"email"}
            placeholder={"seuemail@email.com"}
          />
        </fieldset>
        <fieldset>
          <Input
            {...register("Senha", { required: true })}
            label="Senha"
            name={"Senha"}
            type={password ? "text" : "password"}
          />
          <MdOutlineRemoveRedEye
            style={{ color: Colors.fontColorWhite, fontSize: "25px" }}
            onClick={() => setPassword((p) => !p)}
          />
        </fieldset>

        <Button marginTop={"10px"} text={"Entrar"} />
        <p className={"conta"}>
          Ainda não possui uma conta? <Link to={"/register"}>Registre-se</Link>
        </p>
      </S.FormLogin>
    </S.Section>
  );
};

export default Login;
