const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  constructor(text = '', locale = '') {
    this.text = text;
    this.locale = locale;
    this.translation = "";
  }

  addStyle(word) {
    return `<span class="highlight">${word}</span>`
  }

  captitalizeCharAtZero(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  removeStyle(text) {
    const regex = /(<([^>]+)>)/ig;
    return text.replace(regex, "");
  }

  spelling() {
   if (!this.translation) this.translation = this.text

    Object.entries(americanToBritishSpelling).map(([american, british]) => {
      if (this.locale === 'american-to-british') {
        const spellingRegex = new RegExp('(?<!-)\\b(?!-)' + american + '\\b', 'gmi')
        this.translation = this.translation.replace(
          spellingRegex, 
          this.addStyle(british)
        )
      }
      else if (this.locale === 'british-to-american') {
        const spellingRegex = new RegExp('(?<!-)\\b(?!-)' + british + '\\b', 'gmi')
        this.translation = this.translation.replace(spellingRegex, this.addStyle(american))
      }
    })
    return this
  }

  titles() {
    if (!this.translation) this.translation = this.text

    Object.entries(americanToBritishTitles).map(([american, british]) => {
      if (this.locale === 'american-to-british') {
        let regexFormattedTitleAmerican = american.replace(/\./, '\\.')
        const titleRegex = new RegExp(regexFormattedTitleAmerican, 'gmi')
        this.translation = this.translation.replace(
          titleRegex, 
          this.addStyle(this.captitalizeCharAtZero(british))
        )
      }
      else if (this.locale === 'british-to-american') {
        const titleRegex = new RegExp('\\b' + british + '\\b', 'gmi')
        this.translation = this.translation.replace(
          titleRegex, 
          this.addStyle(this.captitalizeCharAtZero(american))
        )
      }
    })
    return this
  }

  time() {
    if (!this.translation) this.translation = this.text
    
    if (this.locale === 'american-to-british') {
      this.translation = this.translation.replace(/((\d\d|\d):\d\d)/gmi, this.addStyle("$1"))
      this.translation = this.translation.replace(/(?<=\d):(?=\d{2})/gmi, '.')
    }
    else if (this.locale === 'british-to-american') {
      this.translation = this.translation.replace(/((\d\d|\d)\.\d\d)/gmi, this.addStyle("$1"))
      this.translation = this.translation.replace(/(?<=\d)\.(?=\d{2})/gmi, ':')
    }

    return this
  }

  americanOnly() {
   if (!this.translation) this.translation = this.text

    Object.entries(americanOnly).map(([american, british]) => {
      if (this.locale === 'american-to-british') {
        const spellingRegex = new RegExp('(?<!-)\\b' + american + '\\b(?!-)', 'gmi')
        this.translation = this.translation.replace(spellingRegex, this.addStyle(british))
      }
      else if (this.locale === 'british-to-american') {
        const spellingRegex = new RegExp('(?<!-)\\b' + british + '\\b(?!-)', 'gmi')
        this.translation = this.translation.replace(spellingRegex, this.addStyle(american))
      }
    })
    return this
  }

  britishOnly() {
   if (!this.translation) this.translation = this.text

    Object.entries(britishOnly).map(([british, american]) => {
      if (this.locale === 'american-to-british') {
        const spellingRegex = new RegExp('(?<!-)\\b' + american + '\\b(?!-)', 'gmi')
        this.translation = this.translation.replace(spellingRegex, this.addStyle(british))
      }
      else if (this.locale === 'british-to-american') {
        const spellingRegex = new RegExp('(?<!-)\\b' + british + '\\b(?!-)', 'gmi')
        this.translation = this.translation.replace(spellingRegex, this.addStyle(american))
      }
    })
    return this
  }

  build() {
    return {
      text: this.text,
      locale: this.locale,
      translation: this.translation,
      translated: this.translation !== this.text ? true : false,
      unformattedTranslation: this.removeStyle(this.translation)
    }
  }

  translate(text, locale) {
    this.text = text;
    this.locale = locale;
    this.translation = "";

    this.spelling()
    this.titles()
    this.time()
    this.americanOnly()
    this.britishOnly()
    
    return this.build()
  }
}

module.exports = Translator;