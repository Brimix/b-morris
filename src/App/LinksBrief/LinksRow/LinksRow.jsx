import {useCallback, useEffect} from 'react';
import './LinksRow.scss';

const LinksRow = (props) => {
  const {label, url, isDownloadable = false} = props;

  const onClickOpen = useCallback(() => window.open(url, "_blank"), [url]);

  useEffect(() => console.log('holi', isDownloadable));

  return (
    <div className="links-row">
      <label> {label} </label>
      <button onClick={onClickOpen}> Open </button>
      {isDownloadable && (
        <a href={url} Download="Resume - Brian Morris">
          <button type = "button"> Download </button>
        </a>
      )}
    </div>
  )
};

export default LinksRow;
