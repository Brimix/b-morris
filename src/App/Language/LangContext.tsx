import {createContext} from 'react';
import {Language, LangContextInterface, Phrase} from './types';

const defaultLangContext: LangContextInterface = {
    language: Language.ENGLISH,
    setLanguage: () => {},
    translate: function (phrase: Phrase): string {
        throw new Error('Function not implemented.');
    }
}

const LangContext = createContext<LangContextInterface>(defaultLangContext);

export default LangContext;
