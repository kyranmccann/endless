import './Button.css';

export const Button = ({ text, type }) => {
  return (
    <a href="/">
      <button className={`btn ${type}`}>
        {text}
      </button>
    </a>
  )
}
