import { Suspense, lazy } from 'react';
import { NavBar } from '../components/nav/NavBar.js';
import { HeroFallback } from '../components/hero/HeroFallback.js';
// import { Hero } from '../components/hero/Hero.js';
import { Steps } from '../components/steps/Steps.js';

const Hero = lazy(() => import ('../components/hero/Hero.js'))
export default function MonthlyPackages() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<HeroFallback />}>
      <Hero />
      </Suspense>
      <Steps />
    </>
  )
}
