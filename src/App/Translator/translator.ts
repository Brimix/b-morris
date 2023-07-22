import {langMap} from './languages';
import {Language, Phrase} from './types';

class Translator {
  private lang: Language;

  constructor() {
    this.lang = Language.ENGLISH;
  }

  setLanguage(newLanguage: Language) {
    this.lang = newLanguage;
  }

  translate(phrase: Phrase): string {
    return langMap[this.lang][phrase];
  }
}

const translator = new Translator();

export default translator;
