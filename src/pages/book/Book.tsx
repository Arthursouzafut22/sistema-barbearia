import * as S from "./style";
import Input from "../../components/Input/Input";
import { ServiceProps, useFetchServices } from "../../hooks/useFetchServices";
import { formatPrice, scrollTop } from "../../utils/utils";
import { Spinner } from "../../components/Spinner/styles";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./Schema/Schema";
import { useFetchTime } from "../../hooks/useFetchTime";
import { useFetchReserve } from "../../hooks/useFetchReserve";
import { IBook, IndexProps } from "./types";
import { Colors } from "../../styles/Colors";

export default function Book() {
  const { service, load } = useFetchServices();
  const { date, setDate, times, loading } = useFetchTime();
  const { setServico, createBook } = useFetchReserve();
  const [time, setTime] = useState("");
  const [indexButton, setIndexButton] = useState<IndexProps>({
    indexService: undefined,
    indexTime: undefined,
  });
  const { register, handleSubmit } = useForm<IBook>({
    resolver: yupResolver(Schema),
  });

  function selectService(
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) {
    const servico = event.currentTarget?.firstChild?.textContent;
    setServico(servico);
    setIndexButton((prev) => ({ ...prev, indexService: index }));
  }

  function selectTime(event: React.MouseEvent<HTMLDivElement>, index: number) {
    const time = event.currentTarget?.textContent;
    setTime(time);
    setIndexButton((prev) => ({ ...prev, indexTime: index }));
  }

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <S.Section>
      <h1 style={{ color: "#fff" }}>Agende seu Horário</h1>

      <S.FormBook onSubmit={handleSubmit((data) => createBook(data, time))}>
        <S.Box1>
          <h2>Seus Dados</h2>
          <Input
            size={14}
            {...register("Nome", { required: true })}
            name="Nome"
            label="Nome Completo"
            type="text"
            placeholder="Digite seu nome completo"
          />
          <Input
            size={14}
            {...register("Telefone", { required: true })}
            name="Telefone"
            label="Telefone"
            type="text"
            placeholder="(XX) XXXXX-XXXX"
          />
        </S.Box1>

        <S.Box2>
          <h2>Data e Horário</h2>
          <Input
            size={14}
            label="Data"
            type="date"
            {...register("Data", { required: true })}
            name="Data"
            onChange={({ target }) => setDate(target.value)}
            value={date}
          />

          {loading ? (
            <S.BoxLoading>
              <Spinner color={Colors.colorButton} width="50px" />
              <p>Carregando horários...</p>
            </S.BoxLoading>
          ) : (
            <S.BoxTimes>
              {times &&
                times.map((time, index) => (
                  <div
                    role="button"
                    key={index}
                    onClick={(event) => selectTime(event, index)}
                    style={{
                      background:
                        index === indexButton?.indexTime
                          ? Colors.colorButton
                          : "",
                    }}
                  >
                    {time}
                  </div>
                ))}
            </S.BoxTimes>
          )}
        </S.Box2>

        <S.Box3>
          <h2>Escolha o Serviço</h2>
          <div className={"load"}>
            {load && <Spinner color={Colors.colorButton} width="50px" />}
          </div>
          {service &&
            service.map((item: ServiceProps, index) => (
              <S.DivButton
                role="button"
                key={item.id}
                onClick={(event) => selectService(event, index)}
                style={{
                  background:
                    index === indexButton.indexService ? "#BF2EF0" : "",
                }}
              >
                <span>{item.nome}</span>
                <span>{formatPrice(+item.preco.replace(".00", ""))}</span>
              </S.DivButton>
            ))}
        </S.Box3>
        <Button marginTop="30px" style={{ padding: "25px 0px" }}>
          Escolher Pagamento
        </Button>
      </S.FormBook>
    </S.Section>
  );
}
