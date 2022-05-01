import { animated, config, useSpring } from '@react-spring/web';
import { FC, useState } from 'react';
import { createDimensions } from '../model/dimensions';
import './loading-icon.css';

export interface Props {
  length: number;
}

const x = config.molasses;

const AnimationTest: FC<Props> = ({ length }) => {
  // const [isRunning, setRunning] = useState(true);
  const dimensions = createDimensions(length);

  const [flip, set] = useState(false);
  const { t } = useSpring({
    reset: true,
    reverse: flip,
    from: { t: 0.0 },
    to: { t: 1.0 },
    delay: 200,
    config: x,
    onRest: () => set(!flip),
  });

  const asd = useSpring({
    from: { v: 0 },
    to: { v: 150 },
    config: x,
  });

  return (
    <animated.div className="container">
      <animated.div>{t.to(t => t.toFixed(2))}</animated.div>
      <animated.div>{asd.v.to(t => t.toFixed(2))}</animated.div>
      {/* <SvgFrame includeXmlns {...{ dimensions }}>
        <Translate {...createCoordinate(length / 2)}>
          <animated.text>{t.to(t => t.toFixed(2))}</animated.text>
        </Translate>
        <Move
          {...{ t }}
          parameterization={linearlyParameterize(createCoordinate(length))}
        >
          <circle r={50} fill="white" />
        </Move>
      </SvgFrame> */}
      {/* <button onClick={() => setRunning(running => !running)</button> */}
    </animated.div>
  );
};

export default AnimationTest;
