import { ReactComponent as SVGLogo } from '../../assets/logo/logo-endless.svg';
import './Logo.css';

export default function Logo({ className }) {
  return (
    <div className={`logo ${className}`}><SVGLogo /></div>
  )
}
