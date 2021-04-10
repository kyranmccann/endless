import './Step.css';

export const Step = ({ step }) => {
  const formatStepNumber = (n) => {
    return n < 10 ? '0' + n : n;
  }
  return (
    <div className="step">
      <h2 className="number">{formatStepNumber(step.stepNumber)}</h2>
      <div className="underline" />
      <p className="title">{step.versionContent.title}</p>
      <p className="text">{step.versionContent.body}</p>
    </div>
  )
}
