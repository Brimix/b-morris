import {useCallback} from 'react';
import resumePdf from '../../../files/Resume_Brian_Morris_Esquivel.pdf';
import './LinksBrief.scss';
import LinksRow from './LinksRow/LinksRow';

const LinksBrief = () => {
  const onGithubClick = useCallback(() => window.open("https://github.com/Brimix", "_blank"), []);

  const onLinkedinClick = useCallback(() => window.open("https://www.linkedin.com/in/brian-morris-esquivel/", "_blank"), []);

  const onResumeClick = useCallback(() => window.open(resumePdf, "_blank"), []);

  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div>
        <LinksRow label="Check out my work" url="https://github.com/Brimix" />
        <LinksRow label="Stalk me on Linkedin" url="https://www.linkedin.com/in/brian-morris-esquivel/" />
        <LinksRow label="Check my resume!" url={resumePdf} isDownloadable />
      </div>
    </div>
  );
};

export default LinksBrief;