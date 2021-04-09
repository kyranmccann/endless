import { useState, useEffect } from 'react';
import { Button } from '../button/Button.js';
import small from '../../assets/jpg/hero/photo-couch.jpg';
import large from '../../assets/jpg/hero/photo-couch_2x.jpg';
import './Hero.css';

export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [])

  let styleObject = {
    backgroundImage: `url(${small})`
  }
  console.log(width)
  if (width > 1150) {
    styleObject.backgroundImage = `url(${large})`
  }

  return (
    <div className="hero monthly-packages-hero">
      <div className="image" style={ styleObject }>
        <div className="hero-text content-container">
          <h4 className="sub">New Games & Accessories</h4>
          <h2 className='headline'>Monthly packages.<br /> Excitement delivered daily.</h2>
          <h5 className="text">What's the best way to shop for the latest video games and peripherals? How about never shopping at all? <br />You'll get new stuff on your doorstep 	&mdash; every month.</h5>
          <Button text={"Get Started"} type={"base"}/>
        </div>
      </div>
    </div>
  )
}
