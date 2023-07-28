import {DictionaryLang, Language} from '../types';
import {lang_en} from './lang-en';
import {lang_es} from './lang-es';

export const langMap: Record<Language, DictionaryLang> = {
  [Language.ENGLISH]: lang_en,
  [Language.SPANISH]: lang_es,
}