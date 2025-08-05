import { UseContextLogin } from "./context/useContextLogin";
import RoutesProvider from "./routes/Routes";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <UseContextLogin>
        <GlobalStyles />
        <RoutesProvider />
      </UseContextLogin>
    </>
  );
}

export default App;
