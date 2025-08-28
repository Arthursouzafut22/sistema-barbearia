import { useEffect } from "react";
import * as S from "./styles";
import { scrollTop } from "../../utils/utils";
import { AuthLogin } from "../../context/useContextLogin";

export default function Profile() {
  const { logout, user } = AuthLogin();

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <S.Section>
      <h1>Seu Perfil</h1>
      <S.Box>
        <S.BoxInfo>
          <div className="box-1">
            <strong>Nome:</strong>
            <p>{user?.nome ?? "Arthur Santos"} </p>
          </div>
          <div className="box-2">
            <strong>E-mail:</strong>
            <p>{user?.email ?? "boydajoia18k@gmail"}</p>
          </div>
          <button onClick={logout}>Sair da conta</button>
        </S.BoxInfo>
      </S.Box>
    </S.Section>
  );
}
