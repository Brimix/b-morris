import {useCallback, useContext, useState} from 'react';
import {LangContext} from '../Language';
import {Language} from '../Language/types';

const LanguageSwitcher = () => {
  const [isSpanish, setIsSpanish] = useState<boolean>(false);
  const {setLanguage} = useContext(LangContext);

  const onClick = useCallback(() => {
    const newSpanish = !isSpanish;
    console.log("We should be speaking ", (newSpanish ? 'spanish!' : 'english!'));
    setLanguage(newSpanish ? Language.SPANISH : Language.ENGLISH);
    setIsSpanish(newSpanish);
  }, [isSpanish]);

  return (
    <div>
      <button onClick={onClick}> Switch! </button>
    </div>
  );
};

export default LanguageSwitcher;
