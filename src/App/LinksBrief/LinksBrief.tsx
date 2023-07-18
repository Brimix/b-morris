import {useCallback} from 'react';
import LinksRow, {LinksRowProps} from './LinksRow';
import './LinksBrief.scss';

import iconGithub from '../../../img/iconmonstr-github-1.svg';
import iconLinkedin from '../../../img/iconmonstr-linkedin-3.svg';
import iconPdf from '../../../img/iconmonstr-file-34.svg';
import resumePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';

const linksData: Array<LinksRowProps> = [{
  icon: iconGithub,
  label: 'Check out my work',
  url: 'https://github.com/Brimix',
}, {
  icon: iconLinkedin,
  label: 'Stalk me on Linkedin',
  url: 'https://www.linkedin.com/in/brian-morris-esquivel/',
}, {
  icon: iconPdf,
  label: 'Check my resume!',
  url: resumePdf,
  downloadableFilename: 'Resume - Brian Morris',
}];

const LinksBrief = () => {
  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div className="links-brief__wrapper">
        <div>
          {linksData.map((linkData, index) => (
            <LinksRow key={index} {...linkData}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksBrief;
