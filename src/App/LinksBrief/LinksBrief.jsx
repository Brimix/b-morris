import {useCallback} from 'react';
import resumePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';
import './LinksBrief.scss';

const LinksBrief = () => {
  const onGithubClick = useCallback(() => window.open("https://github.com/Brimix", "_blank"), []);

  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div>
        <label> Check out my work </label>
        <button onClick={onGithubClick}> Github </button>
      </div>
      <div>
        <label> Download my resume </label>
        <a href={resumePdf} Download="Resume - Brian Morris">
          <button type = "button"> Download </button>
        </a>
      </div>
    </div>
  );
};

export default LinksBrief;