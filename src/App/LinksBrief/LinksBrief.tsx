import {useContext} from 'react';
import LinksRow, {LinksRowProps} from './LinksRow';
import {LangContext, Phrase} from '../Language';
import './LinksBrief.scss';

import iconGithub from '../../../img/iconmonstr-github-1.svg';
import iconLinkedin from '../../../img/iconmonstr-linkedin-3.svg';
import iconPdf from '../../../img/iconmonstr-file-34.svg';
import resumePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';

const linksData: Array<LinksRowProps> = [{
  color: 'github',
  icon: iconGithub,
  label: Phrase.GITHUB_LINK_MSG,
  url: 'https://github.com/Brimix',
}, {
  color: 'linkedin',
  icon: iconLinkedin,
  label: Phrase.LINKEDIN_LINK_MSG,
  url: 'https://www.linkedin.com/in/brian-morris-esquivel/',
}, {
  color: 'pdf',
  icon: iconPdf,
  label: Phrase.RESUME_LINK_MSG,
  url: resumePdf,
  downloadableFilename: 'Resume - Brian Morris',
}];

const LinksBrief = () => {
  const {translate} = useContext(LangContext);

  return (
    <div className="links-brief">
      <p> {translate(Phrase.SITE_IN_DEVELOPMENT)} </p>
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
