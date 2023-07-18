import {useCallback, useMemo} from 'react';
import {ReactSVG} from 'react-svg';
import './LinksRow.scss';

import iconShare from '../../../../img/iconmonstr-share-11.svg';
import iconDownload from '../../../../img/iconmonstr-download-4.svg';

export interface LinksRowProps {
  color?: string;
  icon: string;
  label: string;
  url: string;
  downloadableFilename?: string;
};

const LinksRow = (props: LinksRowProps) => {
  const {color = "default", icon, label, url, downloadableFilename} = props;

  const isDownloadable = useMemo(() => downloadableFilename !== undefined, [downloadableFilename]);

  const onClickOpen = useCallback(() => window.open(url, "_blank"), [url]);

  return (
    <div className={`links-row links-row-color--${color}`}>
      <div className="links-row__label">
        <ReactSVG className="links-row__icon" src={icon}/>
        <label> {label} </label>
      </div>
      <div>
        <button onClick={onClickOpen}>
          <img src={iconShare} alt="Go" />
        </button>
        {isDownloadable && (
          <a href={url} download={downloadableFilename}>
            <button>
              <img src={iconDownload} alt="Download" />
            </button>
          </a>
        )}
      </div>
    </div>
  )
};

export default LinksRow;
