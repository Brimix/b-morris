import resumeePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';
import './LinksBrief.scss';

const LinksBrief = () => {
  const onGithubClick = () => {
    window.open("https://github.com/Brimix", "_blank");
  }

  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div>
        Check out my work
        <button onClick={onGithubClick}> Github </button>
      </div>
      <div>
        Download my resume
        <a href={resumeePdf} Download="Resume - Brian Morris">
          <button type = "button"> Download </button>
        </a>
      </div>
    </div>
  );
};

export default LinksBrief;