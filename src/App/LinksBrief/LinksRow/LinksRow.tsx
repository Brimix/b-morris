import {useCallback, useMemo} from 'react';
import './LinksRow.scss';

import iconShare from '../../../../img/iconmonstr-share-11.svg';
import iconDownload from '../../../../img/iconmonstr-download-4.svg';

export interface LinksRowProps {
  icon: string;
  label: string;
  url: string;
  downloadableFilename?: string;
};

const LinksRow = (props: LinksRowProps) => {
  const {icon, label, url, downloadableFilename} = props;

  const isDownloadable = useMemo(() => downloadableFilename !== undefined, [downloadableFilename]);

  const onClickOpen = useCallback(() => window.open(url, "_blank"), [url]);

  return (
    <div className="links-row">
      <div>
        <img src={icon} alt="icon" />
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
