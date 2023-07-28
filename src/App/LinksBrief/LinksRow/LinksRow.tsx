import {SyntheticEvent, useCallback, useContext, useEffect, useMemo, useReducer} from 'react';
import {ReactSVG} from 'react-svg';
import {LangContext, Phrase} from '../../Language';
import './LinksRow.scss';

import iconDownload from '../../../../img/iconmonstr-download-4.svg';

export interface LinksRowProps {
  color?: string;
  icon: string;
  label: Phrase;
  url: string;
  downloadableFilename?: string;
};

const LinksRow = (props: LinksRowProps) => {
  const {color = "default", icon, label, url, downloadableFilename} = props;
  const {translate} = useContext(LangContext);

  const isDownloadable = useMemo(() => downloadableFilename !== undefined, [downloadableFilename]);

  const onClick = useCallback(() => window.open(url, "_blank"), [url]);
  const onClickDownload = useCallback((event: SyntheticEvent) => event.stopPropagation(), []);

  return (
    <div className={`links-row links-row-color--${color}`} onClick={onClick}>
      <div className="links-row__label">
        <ReactSVG className="links-row__icon" src={icon}/>
        <label> {translate(label)} </label>
      </div>
      {isDownloadable && (
        <div className={`links-row__button links-row-color--${color}`}>
          <a href={url} download={downloadableFilename} onClick={onClickDownload}>
            <ReactSVG src={iconDownload}/>
          </a>
        </div>
      )}
    </div>
  )
};

export default LinksRow;
