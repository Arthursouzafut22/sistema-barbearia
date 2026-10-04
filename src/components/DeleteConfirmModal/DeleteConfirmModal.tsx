import { useEffect } from "react";
import * as T from "./styles";
// import { useFetchDeleteBooking } from "../../hooks/useFetchDeleteBooking";
import { Spinner } from "../Spinner/styles";

type ModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
  open: boolean;
  spinner: boolean
};

export function DeleteConfirmModal({ onConfirm, open, spinner, setOpen }: ModalProps) {
  // const { spinner } = useFetchDeleteBooking();

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  return (
    <T.Section>
      <T.Modal>
        <h2>Confirmar cancelamento</h2>

        <p style={{ margin: "10px 0 20px", color: "#000" }}>
          Tem certeza que deseja cancelar?
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setOpen(false)}
          >
            Cancelar
          </button>

          <button
            style={{
              background: "red",
              color: "#fff",
              padding: "8px 12px",
              cursor: "pointer",
              borderRadius: " 8px",
            }}
            onClick={() => {
              onConfirm();
            }}
          >
            {spinner ? <Spinner color="#fff" width="30px"/> : "Deletar"}
          </button>
        </div>
      </T.Modal>
    </T.Section>
  );
}
