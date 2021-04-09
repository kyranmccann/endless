import { useEffect, useState } from 'react';
import { Step } from './Step.js';
import { Spinner } from '../loading/Spinner.js';
import { getSteps } from '../../services/steps.js';
import { sortAndFilter } from './helpers.js';
import './Steps.css';

export const Steps = () => {
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
    })
  }, [])


  return (
    <div className='content-container'>
    <h3 className='section-title'>How It Works</h3>
      <div className="steps">
      {loading ? <Spinner /> : steps.length && steps.map(step => {
        return (
          <Step key={step.id} step={step} />
        )
      })}
      </div>
    </div>
  )
}
