import { Colors } from "../../styles/Colors";
import Title from "../Title/Title";
import * as S from "./styles";
import { getServices } from "../../services/getServices";
import { useEffect, useState } from "react";
import { ServiceProps } from "../../services/getServices";
import CardService from "./CardService";
import { Spinner } from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";

export default function OurServices() {
  const [service, setService] = useState<ServiceProps[]>([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoad(true);
      const dados = await getServices();
      setService(dados);
      setLoad(false);
    })();
  }, []);

  return (
    <S.Section>
      <Title>
        <span style={{ color: Colors.fontColorWhite }}>NOSSOS</span>{" "}
        <span style={{ color: Colors.colorButton }}>SERVIÇOS</span>
      </Title>

      <S.BoxCards>
        {load && <Spinner color={Colors.colorButton} width="2.35em" />}
        {service &&
          service
            .slice(0, 4)
            .map((dados: ServiceProps) => (
              <CardService key={dados.id} dados={dados} />
            ))}
      </S.BoxCards>
      <S.ButtonPlus onClick={() => navigate("/services")}>
        VER TODOS OS SERVIÇOS
      </S.ButtonPlus>
    </S.Section>
  );
}
