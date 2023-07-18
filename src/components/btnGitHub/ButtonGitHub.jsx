import gitIcon from './gitHub-black.svg';
import './style.css';

function ButtonGitHub({link}) {
  return (
    <a href={link} className="button-outline" rel='noreferrer' target='_blank'>
      <img src={gitIcon} alt='' />
      GitHub repo
    </a>
  )
}

export default ButtonGitHub;