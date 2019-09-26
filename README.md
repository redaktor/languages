[![GitHub version](https://badge.fury.io/gh/redaktor%2Fnlp.svg)](http://badge.fury.io/gh/redaktor%2Fnlp)
[![slack](https://raw.githubusercontent.com/redaktor/style/master/assets/readme/shields/slackInvite.png)](https://redaktor-slackin.herokuapp.com)
<br><br>
[![logo](https://raw.githubusercontent.com/redaktor/style/master/assets/readme/logo.png)](#)
**redaktor/languages**<br>
Language Detection<br>
[![-](https://raw.githubusercontent.com/redaktor/style/master/assets/readme/lineBlue.png)](#)<br>

# redaktor-languages

#Know Your Language TypeScript



## Features

- detection of script and natural and programming languages
- features 852 natural languages
- meta information about languages and highlight.js support for code

```javascript
var Language = require('./build/Language/main').default;

var text = `Su vida estuvo marcada por el infortunio de contraer poliomielitis y
después por un grave accidente en su juventud que la mantuvo postrada en cama
durante largos periodos, llegando a someterse hasta a 32 operaciones quirúrgicas.`;
var language = new Language();
var result = language.detect(text);
```

## How do I use this package?

```
npm i
node test
```

See ./test.js
You can use it in the browser as well – <br>
For client side use you should narrow down the default languages to those you support.
See ./build/Language/fingerprints for all languages.

###Default settings
```javascript
constructor (
  // maximum for detection results
  count: any = 5,
  // minimum string.length for detection
  minLength = 20,
  natural: any = {
    // detect these human languages :
    languages: [
      'zh', 'es', 'en', 'hi', 'ar', 'pt', 'bn', 'ru', 'ja', 'pa',
      'de', 'jv', 'id', 'te', 'vi', 'ko', 'fr', 'mr', 'ta', 'ur',
      'tr', 'it', 'th', 'gu', 'nan', 'fa', 'pl', 'uk', 'ro', 'nl',
      'hu', 'el', 'sv', 'da', 'fi', 'ca', 'he', 'bs'
    ],
    // if minimum detection score is not reached ...
    fallback: 'en',
    // include meta informations for human languages
    inclMeta: true,
    // recommended settings :
    min: 0.5,             // minimum detection score
    distance: 0.5,        // minimum distance between one and two
    meta: {}, models: <I.Fingerprint[]>[]
  },
  machine: any = {
    // detect these programming or machine languages :
    languages: [
      'apache', 'bash', 'coffeescript', 'cpp', 'cs', 'css', 'diff',
      'django', 'erb', 'go', 'ini', 'java', 'javascript', 'json',
      'makefile', 'markdown', 'nginx', 'objectivec', 'perl', 'php',
      'python', 'ruby', 'sql', 'stylus', 'typescript', 'xml'
    ],
    // if minimum detection score is not reached ...
    fallback: 'markdown',
    // include meta informations for machine languages
    inclMeta: true,
    // include highlighted syntax html markup
    inclMarkup: true,
    // recommended settings :
    min: 0.5,             // minimum detection score
    distance: 0.2,        // minimum distance between one and two
    meta: {}
  },

  hasNatural = true,
  hasMachine = true
)
```
