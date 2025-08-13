import { Colors } from "../../styles/Colors";
import * as S from "./styles";
import { LuPhone } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

export default function Footer() {
  const telWpp = "5531983262026";
  const mensagem = "Olá gostaria de solicitar um orçamento sobre o sistema.";
  const linkWpp = `https://api.whatsapp.com/send?phone=${telWpp}&text=${mensagem}`;

  return (
    <S.Footer>
      <S.BoxFooter>
        <div className="card-footer">
          <h3>Horário de Funcionamento</h3>
          <div className="wrapper">
            <div className="filho-1">
              <p>Terça - Sábado</p>
              <p>Sábado</p>
              <p>Domingo</p>
            </div>
            <div className="filho-2">
              <p>7h às 21h</p>
              <p>9h às 18h</p>
              <span>Fechado</span>
            </div>
          </div>
        </div>
        <div className="card-contato">
          <h3>Contato</h3>
          <p>
            <LuPhone color={Colors.colorButton} fontSize={22} />
            (11) 91111-1111
          </p>
          <div className="box-sociais">
            <FaFacebookSquare fontSize={22} color={Colors.fontColorWhite} />
            <FaInstagram fontSize={22} color={Colors.fontColorWhite} />
          </div>
        </div>
        <div className="card-endereco">
          <h3>Endereço</h3>
          <div className="box-locacao">
            <GrLocation color={Colors.colorButton} fontSize={22} />
            <p>
              531 R. Antônio Agostinho Ferreira
              <br /> Parque Aeroporto - Minas - MG
            </p>
          </div>
          <S.LinkWpp target="_blank" to={linkWpp}>
            QUERO UM SISTEMA IGUAL A ESTE
          </S.LinkWpp>
        </div>
      </S.BoxFooter>
      <div className="linha-bottom">
        <div className="bottom"></div>
      </div>
      <S.BoxDireitos>
        <p>
          © 2024 Barbearia Vip. Todos os direitos reservados.
        </p>
      </S.BoxDireitos>

      <S.BoxDireitosTwo>
        <p>© 2025 Barbearia Vip. Todos os direitos reservados.[Admin]</p>
      </S.BoxDireitosTwo>
    </S.Footer>
  );
}
