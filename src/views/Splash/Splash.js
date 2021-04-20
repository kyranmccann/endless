import React, { useState, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import Logo from '../../components/nav/Logo.js';
import Loader from '../../components/loading/Loader.js'; 

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
  const nodeRef = useRef(null); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase(2);
      setLoaded((prevState) => ({ ...prevState, splash: true }));
    }, 500);

    const timer2 = setTimeout(() => {
      setPhase(3) 
    }, 7500); 

    const timer3 = setTimeout(() => {
      setLoaded({ page: true, splash: false });  
    }, 80000); 

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2); 
      clearTimeout(timer3); 
    };
  }, [setLoaded]);

  return (
    <Transition nodeRef={nodeRef} in={show} timeout={500} unmountOnExit>
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
