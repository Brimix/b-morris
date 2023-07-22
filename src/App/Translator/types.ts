export enum Language {
    ENGLISH = 'en',
    SPANISH = 'es',
}

export enum Phrase {
    GITHUB_LINK_MSG,
}

export type DictionaryLang = Record<Phrase, string>;