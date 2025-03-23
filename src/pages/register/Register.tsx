import * as S from "./Styles";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/Colors";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IForm } from "./types";
import { Schema } from "./Schema/Schema";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const { register, handleSubmit } = useForm<IForm>({
    resolver: yupResolver(Schema),
  });

  const registerSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
    <S.Section>
      <S.FormRegister onSubmit={handleSubmit(registerSubmit)}>
        <fieldset>
          <h2>Registre-se</h2>
          <p>Informe seus dados e crie uma conta.</p>
        </fieldset>
        <fieldset>
          <Input
            {...register("Nome", { required: true })}
            label="Nome"
            name={"Nome"}
            type={"text"}
            placeholder={"Informe seu nome"}
          />
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
        <fieldset>
          <Input
            {...register("Confirme a senha", { required: true })}
            label="Confirme a senha"
            name={"Confirme a senha"}
            type={confirmPassword ? "text" : "password"}
          />
          <MdOutlineRemoveRedEye
            style={{ color: Colors.fontColorWhite, fontSize: "25px" }}
            onClick={() => setConfirmPassword((p) => !p)}
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
