import { useNavigate } from "react-router-dom";
import useMedia from "../../hooks/useMedia";
import * as S from "./style";
import { MdDateRange } from "react-icons/md";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs ";
import OurServices from "../../components/OurServices/OurServices";

export default function Home() {
  const { mobile } = useMedia("(max-width:767px)");
  const navigate = useNavigate();

  

  return (
    <S.Main>
      <S.BoxBanner mobile={mobile}>
        <div style={{ padding: "10px" }}>
          <div className="box">
            <h1>
              Estilo e <span style={{ color: "" }}>Sofistifação</span>
            </h1>
            <p>
              Tradição e estilo em cada corte. Uma experiência única de <br />{" "}
              barbearia moderna.
            </p>
            <button onClick={() => navigate("/agendar")}>
              <MdDateRange fontSize={25} /> Agendar
            </button>
          </div>
        </div>
      </S.BoxBanner>
      <WhyChooseUs />
      <OurServices/>
    </S.Main>
  );
}
