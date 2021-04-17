import { ReactComponent as SVGLogo } from '../../assets/logo/logo-endless.svg';
import './Logo.css';

export const Logo = ({ className }) => {
  return (
    <div className={`logo ${className}`}><SVGLogo /></div>
  )
}
