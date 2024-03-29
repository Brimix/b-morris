import {useCallback, useState} from 'react';
import {Language, LangContextInterface, Phrase} from './types';
import {languageMap} from './languages';

const useLanguage = (): LangContextInterface => {
    const [language, setLanguage] = useState<Language> (Language.ENGLISH);

    const translate = useCallback((phrase: Phrase) => languageMap[language][phrase], [language]);

    return {language, setLanguage, translate};
};

export default useLanguage;
