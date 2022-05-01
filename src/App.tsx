import { animated, config, useSpring } from '@react-spring/web';
import { FC, useState } from 'react';
import './App.css';

const bounds = {
  from: { value: 0 },
  to: { value: 100 },
};

const App: FC = () => {
  const [show, setShow] = useState(false);
  const { value: v1 } = useSpring({ ...bounds });

  const [flip, set] = useState(false);
  const { value: v2 } = useSpring({
    ...bounds,
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(flip => !flip),
  });

  return (
    <div>
      <animated.div>{v1.to(t => t.toFixed(2))}</animated.div>
      <animated.div>{v2.to(t => t.toFixed(2))}</animated.div>
    </div>
  );
};

export default App;

// const App: FC = () => {
//   const [show, setShow] = useState(false);

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         {show && <LoadingIcon length={400} />}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <button onClick={() => setShow(show => !show)}>Show</button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };
