import { useEffect, useState } from 'react';
import { Step } from './Step.js';
import { getSteps } from '../../services/steps.js';
import { sortAndFilter } from './helpers.js';
import './Steps.css';

export const Steps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    //make api call
    getSteps()
    .then(data =>{
      //sort steps received from api
      data = sortAndFilter(data);
      setSteps(data)
    })
  }, [])


  return (
    <div className='content-container'>
    <h3 className='section-title'>How It Works</h3>
      <div className="steps">

      {steps.length && steps.map(step => {
        return (
          <Step key={step.id} step={step} />
        )
      })}
      </div>
    </div>
  )
}
