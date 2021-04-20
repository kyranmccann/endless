import React, { useEffect, useState } from 'react';
import Step from './Step.js';
import Loader from '../loading/Loader.js';
import { getSteps } from '../../services/steps.js';
import { sortAndFilter } from './helpers.js';
import './Steps.css';

function Steps() {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //make api call
    getSteps()
    .then(data =>{
      //sort steps received from api
      data = sortAndFilter(data);
      //set state
      setLoading(false);
      setSteps(data);
    });
  }, [])


  return (
    <section id="how-it-works" className='content-container'>
    <h3 className='section-title'>How It Works</h3>
      <div className="steps">
      {loading ? <Loader /> : steps.length && steps.map(step => {
        return (
          <Step key={step.id} step={step} />
        )
      })}
      </div>
    </section>
  )
}

export default React.memo(Steps); 