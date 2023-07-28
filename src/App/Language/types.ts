import {Dispatch} from 'react';

export enum Language {
    ENGLISH = 'en',
    SPANISH = 'es',
}

export enum Phrase {
    GITHUB_LINK_MSG,
    LINKEDIN_LINK_MSG,
    RESUME_LINK_MSG,
}

export type DictionaryLang = Record<Phrase, string>;

export type LanguageContextInterface = {
    language: Language;
    setLanguage: Dispatch<Language>;
    translate: (phrase: Phrase) => string;
};
