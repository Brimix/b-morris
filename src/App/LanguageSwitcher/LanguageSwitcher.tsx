import {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {LangContext, Language, Phrase} from '../Language';

const LanguageSwitcher = () => {
  const {language, setLanguage, translate} = useContext(LangContext);
  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const languageList = useMemo(() => Object.values(Language), []);

  const shiftLanguage = useCallback(() => {
    setLanguageIndex(
      (prevIndex: number) => (prevIndex + 1) % languageList.length
    );
  }, [languageIndex]);

  const label: string = useMemo(() => {
    return `${translate(Phrase.CURRENT_LANGUAGE)}: ${language}`;
  }, [translate, language]);

  useEffect(() => setLanguage(languageList[languageIndex]), [languageIndex]);

  return (
    <div>
      <button onClick={shiftLanguage}> {label} </button>
    </div>
  );
};

export default LanguageSwitcher;
