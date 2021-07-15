/* eslint-disable */
import CountUp, { useCountUp } from 'react-countup';

function Countup (props) {
  const { countUp } = useCountUp({
    duration: 5,
    end: 10000,
    startOnMount: true
  });
  return (
      <h1>
        <CountUp end={props.num} duration={10} prefix={props.prefix} suffix={props.suffix} />
      </h1>
  );
};

export default Countup;
