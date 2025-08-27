import { Colors } from "../../styles/Colors";
import Title from "../Title/Title";
import * as S from "./styles";
import CardService from "./CardService";
import { Spinner } from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { ServiceProps, useFetchServices } from "../../hooks/useFetchServices";

export default function OurServices() {
  const { service, load } = useFetchServices();
  const navigate = useNavigate();

  return (
    <S.Section>
      <Title>
        <span style={{ color: Colors.fontColorWhite }}>NOSSOS</span>{" "}
        <span style={{ color: Colors.colorButton }}>SERVIÇOS</span>
      </Title>

      <S.BoxCards>
        {load && <Spinner />}
        {service &&
          service
            .slice(0, 4)
            .map((dados: ServiceProps) => (
              <CardService key={dados.id} dados={dados} />
            ))}
      </S.BoxCards>
      <S.ButtonPlus
        style={{ visibility: load ? "hidden" : "initial" }}
        onClick={() => navigate("/services")}
      >
        VER TODOS OS SERVIÇOS
      </S.ButtonPlus>
    </S.Section>
  );
}
