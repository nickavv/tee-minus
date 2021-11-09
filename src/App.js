import { useQueryParam, StringParam } from "use-query-params";
import 'typeface-comfortaa';

import Countdown from './components/Countdown/Countdown';

function App() {
    const [startDate] = useQueryParam('startDate', StringParam);
      const [targetDate] = useQueryParam('targetDate', StringParam);

      return (
          <main>
              <title>Tee-Minus</title>
              <Countdown targetDate={targetDate} startDate={startDate}/>
          </main>
      );
}

export default App;
