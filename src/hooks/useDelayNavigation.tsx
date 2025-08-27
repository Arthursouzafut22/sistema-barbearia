import { useNavigate } from "react-router-dom";

export const useDelayNavigation = () => {
  const navigate = useNavigate();

  function delayNavigation(router: string, sucesso: string) {
    const delay = 2000;

    if (sucesso?.length > 0) {
      return setTimeout(() => {
        navigate(router);
      }, delay);
    }
  }

  return {
    delayNavigation,
  };
};
