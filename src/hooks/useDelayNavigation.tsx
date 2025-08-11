import { useNavigate } from "react-router-dom";

export const useDelayNavigation = () => {
  const navigate = useNavigate();

  function delayNavigation(router: string) {
    const delay = 2000;

    return setTimeout(() => {
      navigate(router);
    }, delay);
  }

  return {
    delayNavigation,
  };
};
