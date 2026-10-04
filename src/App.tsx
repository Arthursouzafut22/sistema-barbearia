import { AuthProvider } from "./context/useContextLogin";
import RoutesProvider from "./routes/Routes";
import { GlobalStyles } from "./styles/Global";

function App() {
  return (
    <>
      <AuthProvider>
        <GlobalStyles />
        <RoutesProvider />
      </AuthProvider>
    </>
  );
}

export default App;
