import * as S from "./style";
import { FaRegUser } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { Colors } from "../../styles/Colors";
import useMedia from "../../hooks/useMedia";
import Title from "../Title/Title";

export default function WhyChooseUs() {
  const { mobile } = useMedia("(max-width:767px)");
  
  return (
    <S.Section>
      <Title>
        <span style={{ color: Colors.colorButton }}>POR QUE</span> NOS ESCOLHER?
      </Title>
      <S.Box>
        <div className="card">
          <span>
            <FaRegUser fontSize={mobile ? 28 : 38} />
          </span>
          <h2>Profissionais Experientes</h2>
          <p>
            Nossa equipe possui anos de experiência em cortes modernos e
            clássicos, sempre atualizados com as tendências.
          </p>
        </div>
        <div className="card">
          <span>
            <FaRegBuilding fontSize={mobile ? 28 : 38} />
          </span>
          <h2>Ambiente Acolhedor</h2>
          <p>
            Um espaço pensado para seu conforto e bem-estar, com música boa e
            bebidas para tornar sua experiência única.
          </p>
        </div>{" "}
        <div className="card">
          <span>
            <BsStars fontSize={mobile ? 28 : 38} />
          </span>
          <h2>Produtos Premium</h2>
          <p>
            Utilizamos apenas os melhores produtos do mercado, garantindo
            qualidade e resultados excepcionais em cada serviço.
          </p>
        </div>
      </S.Box>
    </S.Section>
  );
}
