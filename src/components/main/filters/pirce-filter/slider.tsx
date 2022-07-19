import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

function Slider() : JSX.Element{
  return (
    <Nouislider range={{ min: 0, max: 10000 }} start={[0]} connect />
  );
}

export default Slider;
