import I = require('./interfaces');
import { deepMixin } from '@dojo/framework/core/util';
import Promise from '@dojo/shim/Promise';
import loadCldrData from '@dojo/i18n/cldr/load';
import specialScripts from './meta/scripts';
const highlight: any = require('highlight.js/lib/highlight');
function isObjectLike(v: any) { return !!v && typeof v === 'object' }
function isObject(v: any) { return isObjectLike(v) || typeof v === 'function' }
/*
TODO:
registerLanguage function
more meta functions for informations about languages
*/

/* NOTE : Do you speak one of the following languages ?
// We could not find enough written information. Please point us to texts ...
[aa] Afar, [as] Assamese, [bm] Bambara, [bh] Bihari, [cu] Church / Old Slavonic,
[dv] Divehi; Maldivian, [ee] Ewe, [ff] Fulah, [hz] Herero, [ho] Hiri Motu,
[ie] Occidental, [ks] Kashmiri, [ki] Kikuyu, [kj] Kwanyama,
[li] Limburgan, [na] Nauru, [pi] Pali, [se] Northern Sami, [sd] Sindhi
*/

//@Redaktor.app({})
export default class Language {
  P: any = {
    nL: './fingerprints/',
    nM: './meta/natural/',
    mL: '../../node_modules/highlight.js/lib/languages/',
    mM: './meta/machine/',
    sM: './meta/script/'
  };
  R: any = {
    punct: /[·!-#%-*,-/:-;?-@_{}¡«»¿;＃％＊$§=]|[\u2000-\u206e⸀-\u2e7e\u3000-〾]|\ud809[\udc00-\udc7e]/g
  };
  upvoterScripts: any = {
    Jamo: 'ko', Kore: 'ko',
    Kana: 'ja', Hira: 'ja', Jpan: 'ja',
    Hans: 'cmn', Hant: 'cmn'
  };
  constructor (
    protected count: any = 5, // maximum for detection results
    protected minLength = 20, // minimum string.length for detection
    protected natural: any = {
      languages: [ // detect these human languages :
        'zh', 'es', 'en', 'hi', 'ar', 'pt', 'bn', 'ru', 'ja', 'pa',
        'de', 'jv', 'id', 'te', 'vi', 'ko', 'fr', 'mr', 'ta', 'ur',
        'tr', 'it', 'th', 'gu', 'nan', 'fa', 'pl', 'uk', 'ro', 'nl',
        'hu', 'el', 'sv', 'da', 'fi', 'ca', 'he', 'bs'
      ],
      fallback: 'en',       // if minimum detection score is not reached ...
      inclMeta: true,       // include meta informations for human languages
      // recommended
      min: 0.5,             // minimum detection score
      distance: 0.5,        // minimum distance between one and two
      meta: {}, models: <I.Fingerprint[]>[]
    },
    protected machine: any = {
      languages: [ // detect these programming or machine languages :
        'apache', 'bash', 'coffeescript', 'cpp', 'cs', 'css', 'diff',
        'django', 'erb', 'go', 'ini', 'java', 'javascript', 'json',
        'makefile', 'markdown', 'nginx', 'objectivec', 'perl', 'php',
        'python', 'ruby', 'sql', 'stylus', 'typescript', 'xml'
      ],
      fallback: 'markdown', // if minimum detection score is not reached ...
      inclMeta: true,       // include meta informations for machine languages
      inclMarkup: true,     // include highlighted syntax html markup
      // recommended
      min: 0.5,             // minimum detection score
      distance: 0.2,        // minimum distance between one and two
      meta: {}
    },
    protected hasNatural = true,
    protected hasMachine = true
  ) {
    //this.register(this);
    isObject(count) && deepMixin(this, count);
    this.hasNatural = !!this.natural && !!Array.isArray(this.natural.languages) &&
      !!this.natural.languages.length;
    this.hasMachine = !!this.machine && !!Array.isArray(this.machine.languages) &&
      !!this.machine.languages.length;
    this.getMeta();
  }

  // create score array :
  protected score(s: string, _script = {name: 'Latin',iso:'Latn',score:0}) : number[] {
    const upvoter = this.upvoterScripts[_script.iso] || void 0;
    const myModel = this.createModel(s);
    const scores: number[] = [];
    for (var i in this.natural.models) {
      const model = this.natural.models[i];
      const _s = this.compare(myModel, model.trigrams);
      scores.push((!!upvoter && model.id === upvoter) ? ((_s+_script.score)/1.8) : _s);
    };
    return scores;
  }
  // calculate the distance to the fingerprint model :
  protected compare(model:number[][], modelKnown: any) : number {
    let _add = 1000;
    let dist = 0;
    var i: number, l: number;
    for (i = 0, l = model.length; i < l; i++) {
      if (modelKnown[model[i][0]]) {
        dist += Math.abs(model[i][1] - modelKnown[model[i][0]]);
      } else {
        dist += _add;
      }
    }
    return Math.floor(this.count*(1 - (dist / (_add * model.length)))*1000)/1000;
  }
  // create array of trigrams sorted by frequency :
  protected createModel(s: string) : number[][] {
    const trigrams: any = {}, trigramsSorted: any[] = [];
    const strArr = s.toLowerCase().split('');
    var i: number, l: number, key: string;
    for (i = 0, l = strArr.length - 2; i < l; i++) {
      const trigramKey = strArr[i] + strArr[i + 1] + strArr[i + 2] + '';
      if (!trigrams[trigramKey]) {
        trigrams[trigramKey] = 1;
      } else {
        trigrams[trigramKey] += 1;
      }
    }
    // convert trigram object to array
    for (key in trigrams) {
      trigramsSorted[trigramsSorted.length] = [key, trigrams[key]];
    }
    // sort trigrams array, high-to-low
    return trigramsSorted.sort(function(objA, objB) { return objB[1] - objA[1]; });
  }

  public bestMachine(s: string) {
    const o = highlight.highlightAuto(s);
    const norm = 24;
    let bestLangs = [o];
    if (!!o.second_best) { bestLangs.push(o.second_best); }
    if (!!this.machine.min && (o.relevance/norm) < this.machine.min) {
      if (!this.machine.fallback) { return []; }
      bestLangs = [{language: this.machine.fallback, relevance: 0}];
    }
    const fMax = (o.relevance/norm);
    const results: any[] = bestLangs.map((_o, i) => {
      const max = (_o.relevance/norm);
      if (i === 1 && !!this.machine.distance && max > (fMax - this.machine.distance)) {
        return;
      }
      const r: any = { id: _o.language, rank: i+1, score: max, name: '' };
      if (!!this.machine.inclMeta) {
        let meta = (this.machine.meta.hasOwnProperty(_o.language)) ?
          this.machine.meta[_o.language] : {};
        r.name = meta.name || '';
        delete meta.name;
        r.meta = meta;
      }
      if (!!this.machine.inclMarkup) { r.markup = _o.value || ''; }
      return r;
    }).filter((_o) => !!_o);
    return results.slice(0, this.count||5);
  }

  protected bestNatural(s: string): Object[] {
    let model: any;
    const bestScript = this.detectScript(s);
  	const list = this.score(s.replace(/[\d]/g, ''), bestScript);
  	let bestScore: number = 0;
    let bestLangs: I.Languages = [];
  	for (var key in list) {
    	let score = list[key];
  		if (bestScore < score) {
        model = this.natural.models[key];
        bestLangs.unshift({ id: model.id, rank: 1, score: score, name: model.name });
        // sic! set new best value:
        bestScore = score;
  		};
  	};

// console.log(this.natural.min, bestLangs)
/* TODO FIXME fallback */
    if (!bestLangs.length || (!!this.natural.min && bestLangs[0].score < this.natural.min)) {
      if (!this.natural.fallback) { return []; }
      //TODO FIXME ARRAY console.log(this.natural.models)
      model = this.natural.models.filter((m: any) => (m.id === this.natural.fallback))[0];
      bestLangs = !(model) ? [] : [{ id: model.id, rank: 1, score: 0, name: model.name }];
    }

    const fMax = bestLangs[0].score;
  	const results: any[] = bestLangs.slice(0, this.count).map((o: any, i: number) => {
      const meta = (this.natural.meta.hasOwnProperty(o.id)) ? this.natural.meta[o.id] : {};
      const bestRegion = (bestScript.iso === 'Bopo') ? 'TW' : meta.locales[bestScript.iso]||'ZZ';
      o.locale = `${o.id}-${bestScript.iso}-${bestRegion}`;
      o.script = bestScript;
      if (i === 1 && !!this.natural.distance && o.score > (fMax - this.natural.distance)) {
        return;
      }
      o.rank = i + 1;
      if (!!this.natural.inclMeta) { o.meta = meta; }
      return o;
    });
    if (!results[1]) { return results.slice(0, 1); }
    return results.filter((o) => (!!o && o.score > this.natural.min)).slice(0, this.count||5);
  }

  protected getScript(id: string) {
    return specialScripts.filter(_o => (_o.iso === id || (!!_o.id && _o.id === id)))[0];
  }
  protected scriptScore(s: string, o: any) {
    return ((s.length - s.replace((o.detect||o.subdetect),'').length) / 100);
  }
  protected bestCJK(s: string, scripts: any[]): any {
    // http://unicode.org/faq/han_cjk.html
    let cjk = 'Hans';
    const nextIso: string = (scripts.length > 1 && scripts[1].iso);
    if (nextIso && this.upvoterScripts[nextIso]) {
      const koJa = ((scripts[1].score / scripts[0].score) > 0.5) ? scripts[1].iso : cjk;
      cjk = (koJa === 'Jamo') ? 'Kore' : 'Jpan';
    }
    const CJK = { name: this.getScript(cjk).name, iso: cjk, score: scripts[0].score };
    // can still be Chinese Traditional :
    if (CJK.iso === 'Hans') {
      const st = [this.getScript('Hans'), this.getScript('Hant')];
      const tScore = (this.scriptScore(s, st[1]));
      return ((tScore < 0.1) ?
        { name: st[0].name, iso: 'Hans', score: scripts[0].score } :
        { name: st[1].name, iso: 'Hant', score: tScore });
    }
    return CJK;
  }
  public detectScript(s: string): any {
    s = s.replace(/[\s\d]/g, '').replace(this.R.punct, '');
    const scripts = specialScripts.map((o: any): any => {
      if (!o.detect) { return { score: 0, iso: null }; }
      return { name: o.name, iso: (o.iso||null), score: this.scriptScore(s, o) }
    }).filter((a: any) => !!a.score).sort((a: any, b: any) => b.score-a.score);
    if (!scripts.length) {
      return [];
    } else if (scripts[0].score > 1) {
      scripts[0].score = 1;
    }
    // can still be Chinese or Japanese, Korean (Han mixed) languages :
    return (!scripts[0].iso) ? this.bestCJK(s, scripts) : scripts[0];
  }

  public detect(s: string): any {
    if (!this.hasNatural) {
      return (!this.hasMachine) ? Promise.reject(void 0) : this.bestMachine(s)
    }
    return (!this.hasMachine) ? this.bestNatural(s) : {
      natural: (this.bestNatural(s)),
      machine: (this.bestMachine(s))
    };
  }

  protected fingerprintModels(l: string) {
    const model = require(this.P.nL + l).default;
    if (!!model.trigrams) {
      this.natural.models.push(model);
      this.natural.meta[l] = require(this.P.nM + l).default;
    }
    if (!!model.dependencies) {
      model.dependencies.forEach((_l: string) => {
        const tModel = require(this.P.nL + _l).default;
        if (!this.natural.meta[tModel.id]) {
          this.natural.meta[tModel.id] = require(this.P.nM + tModel.id).default;
        }
        this.natural.models.push(tModel);
      });
    }
  }
  public getMeta(type?: string, lang?: string) {
    if (typeof type === 'string' && typeof lang === 'string') {
      let meta = !!(this.natural.meta[lang]) ? this.natural.meta[lang] :
        this.natural.meta[lang.split('-')[0]];
      if (!meta) {
        try {
          meta = require(this.P.nM+lang).default;
        } catch (e) {
          meta = require(this.P.nM+lang.split('-')[0]).default;
        }
      }
      return meta || {};
    }
    if ((!!this.hasNatural && typeof type !== 'string') || type === 'natural') {
      this.natural.languages.forEach(this.fingerprintModels.bind(this));
    }
    if ((!!this.hasMachine && typeof type !== 'string') || type === 'machine') {
      this.machine.languages.forEach((l: string) => {
        highlight.registerLanguage(l, require(this.P.mL+l));
        this.machine.meta[l] = require(this.P.mM+l).default;
      });
    }
  }

  public getNaturalMeta(locale: string) {
    return this.getMeta('natural', locale);
  }
  public getMachineMeta(locale: string) {
    return this.getMeta('machine', locale);
  }
  public getLocalLangName(locale: string) {
    return this.getMeta('natural', locale).nameT || '';
  }

}
