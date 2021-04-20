import React, { useState, useEffect } from 'react';
import Logo from '../../components/nav/Logo.js';
import Loader from '../../components/loading/Loader.js'; 
import { Transition } from 'react-transition-group';

import classes from './Splash.module.css';

const phases = {
  1: classes.Enter,
  2: classes.Draw, 
  3: classes.Exit,
};

const defaultStyle = {
  transition: `opacity ${500}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

function Splash({ setLoaded, show }) {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(2);
      setLoaded((prevState) => ({ ...prevState, splash: true }));
    }, 500);

    const timer2 = setTimeout(() => {
      setLoaded({ page: true, splash: false });  
    }, 8000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2); 
    };
  }, [setLoaded]);

  return (
    <Transition in={show} timeout={500} unmountOnExit>
      {(state) => (
        <div
          className={`${classes.Splash} splash`}
          style={{ ...defaultStyle, ...transitionStyles[state] }}
        >
          <Logo
            className={[classes.Logo, phases[phase]].join(' ')}
          />
          <Loader />
        </div>
      )}
    </Transition>
  );
}

export default React.memo(Splash);
