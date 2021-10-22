import * as React from "react";
import { useQueryParam, StringParam } from "use-query-params";

import Countdown from '../components/Countdown/Countdown';

import '../main.css';

const IndexPage = () => {

    const [startDate, setStartDate] = useQueryParam('startDate', StringParam);
    const [targetDate, setTargetDate] = useQueryParam('targetDate', StringParam);

    return (
        <main>
            <title>Tee-Minus</title>
            <Countdown targetDate={targetDate} startDate={startDate}/>
        </main>
    )
}

export default IndexPage
