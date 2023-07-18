import {useCallback} from 'react';
import resumePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';
import './LinksBrief.scss';
import LinksRow from './LinksRow/LinksRow';

import iconGithub from '../../../img/iconmonstr-github-1.svg';
import iconLinkedin from '../../../img/iconmonstr-linkedin-3.svg';
import iconPdf from '../../../img/iconmonstr-file-34.svg';

const LinksBrief = () => {
  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div className="links-brief__wrapper">
        <div>
          <LinksRow icon={iconGithub} label="Check out my work" url="https://github.com/Brimix" />
          <LinksRow icon={iconLinkedin} label="Stalk me on Linkedin" url="https://www.linkedin.com/in/brian-morris-esquivel/" />
          <LinksRow icon={iconPdf} label="Check my resume!" url={resumePdf} isDownloadable downloadableFilename="Resume - Brian Morris"/>
        </div>
      </div>
    </div>
  );
};

export default LinksBrief;