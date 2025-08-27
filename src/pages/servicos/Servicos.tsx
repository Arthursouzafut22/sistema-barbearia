import * as S from "./styles";
import { formatPrice } from "../../utils/utils";
import { Spinner } from "../../components/Spinner/styles";
import { useNavigate } from "react-router-dom";
import { ServiceProps, useFetchServices } from "../../hooks/useFetchServices";

export default function Servicos() {
  const { service, load } = useFetchServices();
  const navigate = useNavigate();

  return (
    <S.Section load={load}>
      <h1>Nossos Serviços</h1>

      <div className={"load"}>{load && <Spinner />}</div>
      <S.BoxServices>
        {service &&
          service.map((item: ServiceProps) => (
            <S.CardServices key={item.id}>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <S.Wrapper>
                <span>{formatPrice(+item.preco.replace(".00", ""))}</span>
                <button onClick={() => navigate("/book")}>Agendar</button>
              </S.Wrapper>
            </S.CardServices>
          ))}
      </S.BoxServices>
    </S.Section>
  );
}
