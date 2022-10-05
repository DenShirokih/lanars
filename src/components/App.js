import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./Game";
import DevProvider from "./usedev/DevProvider";

function App() {
  return (
    <DevProvider>
      <Game />
    </DevProvider>
  );
}

export default App;
