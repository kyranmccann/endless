import './Button.css';
export const Button = ({ text, type }) => {
  return (
    <a href="#how-it-works">
      <button className={`btn ${type}`}>
        {text}
      </button>
    </a>
  )
}
