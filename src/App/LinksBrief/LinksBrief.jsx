import {useCallback} from 'react';
import resumePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';
import './LinksBrief.scss';

const LinksBrief = () => {
  const onGithubClick = useCallback(() => window.open("https://github.com/Brimix", "_blank"), []);

  const onLinkedinClick = useCallback(() => window.open("https://www.linkedin.com/in/brian-morris-esquivel/", "_blank"), []);

  const onResumeClick = useCallback(() => window.open(resumePdf, "_blank"), []);

  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div>
        <label> Check out my work </label>
        <button onClick={onGithubClick}> Github </button>
      </div>
      <div>
        <label> Stalk me on Linkedin </label>
        <button onClick={onLinkedinClick}> Linkedin </button>
      </div>
      <div>
        <label> Check my resume! </label>
        <button onClick={onResumeClick}> Open </button>
        <a href={resumePdf} Download="Resume - Brian Morris">
          <button type = "button"> Download </button>
        </a>
      </div>
    </div>
  );
};

export default LinksBrief;