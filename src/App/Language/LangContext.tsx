import {createContext} from 'react';
import {Language, LanguageContextInterface, Phrase} from './types';

const defaultLangContext: LanguageContextInterface = {
    language: Language.ENGLISH,
    setLanguage: function (value: Language): void {
        throw new Error('Function not implemented.');
    },
    translate: function (phrase: Phrase): string {
        throw new Error('Function not implemented.');
    }
}

const LangContext = createContext<LanguageContextInterface>(defaultLangContext);

export default LangContext;
