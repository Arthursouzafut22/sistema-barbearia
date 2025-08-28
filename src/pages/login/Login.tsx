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
import { ILogin } from "./types";
import { useFetchLogin } from "../../hooks/useFetchLogin";
import { Spinner } from "../../components/Spinner/Spinner";

const Login = () => {
  const [password, setPassword] = useState(false);
  const { loginSubmit, mensagem, spinner, sucess } = useFetchLogin();
  const { register, handleSubmit } = useForm<ILogin>({
    resolver: yupResolver(Schema),
  });

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
        {mensagem?.length > 0 && (
          <p style={{ color: "red", fontSize: "14px", textAlign: "center" }}>
            {mensagem}
          </p>
        )}
        {sucess?.length > 0 && (
          <p
            style={{ color: "#4caf50", fontSize: "14px", textAlign: "center" }}
          >
            {sucess}
          </p>
        )}
        <Button marginTop={"10px"}>
          {spinner ? (
            <Spinner color={Colors.fontColorWhite} width="40px" />
          ) : (
            "Entrar"
          )}
        </Button>
        <p className={"conta"}>
          Ainda não possui uma conta? <Link to={"/register"}>Registre-se</Link>
        </p>
      </S.FormLogin>
    </S.Section>
  );
};

export default Login;
