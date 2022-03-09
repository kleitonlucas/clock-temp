import * as C from "./AppStyles";
import { Climate } from "./components/climate";
import { Clock } from "./components/clock";

const App = () => {
  return (
    <C.Container>
      <C.Area>
        <Clock />
        <hr/>
        <Climate />
      </C.Area>
    </C.Container>
  );
}

export default App;

/**Fazer o deploy */