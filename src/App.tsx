import { Flowbite  } from "flowbite-react";
import Header from "./components/Header";
import Apresentacao from "./components/Apresentacao";
import './styles/app.sass'

function App() {
  return (
    <Flowbite>
      <Header />
      <Apresentacao />
    </Flowbite>
  );
}

export default App;
