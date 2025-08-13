import { useNavigate } from "react-router-dom";
import { ServiceProps } from "../../services/getServices";
import { URL_BASE } from "../../services/urls";
import * as S from "./styles";
import { formatPrice } from "../../utils/utils";

export default function CardService({ dados }: { dados: ServiceProps }) {
  const navigate = useNavigate();

  return (
    <S.Card>
      <img
        src={`${URL_BASE + "/imagem/" + dados.imagems}`}
        alt="imagens-serviços"
      />
      <S.WrapperCard>
        <h1 style={{ color: "#fff" }}>{dados.nome}</h1>
        <strong>{formatPrice(Number(dados.preco.replace(".00", "")))}</strong>
        <p>{dados.descricao}</p>
        <button onClick={() => navigate("/agendar")}>Agendar</button>
      </S.WrapperCard>
    </S.Card>
  );
}
