"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@dojo/framework/core/util");
var Promise_1 = require("@dojo/shim/Promise");
var scripts_1 = require("./meta/scripts");
var highlight = require('highlight.js/lib/highlight');
function isObjectLike(v) { return !!v && typeof v === 'object'; }
function isObject(v) { return isObjectLike(v) || typeof v === 'function'; }
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
var Language = /** @class */ (function () {
    function Language(count, // maximum for detection results
    minLength, // minimum string.length for detection
    natural, machine, hasNatural, hasMachine) {
        if (count === void 0) { count = 5; }
        if (minLength === void 0) { minLength = 20; }
        if (natural === void 0) { natural = {
            languages: [
                'zh', 'es', 'en', 'hi', 'ar', 'pt', 'bn', 'ru', 'ja', 'pa',
                'de', 'jv', 'id', 'te', 'vi', 'ko', 'fr', 'mr', 'ta', 'ur',
                'tr', 'it', 'th', 'gu', 'nan', 'fa', 'pl', 'uk', 'ro', 'nl',
                'hu', 'el', 'sv', 'da', 'fi', 'ca', 'he', 'bs'
            ],
            fallback: 'en',
            inclMeta: true,
            // recommended
            min: 0.5,
            distance: 0.5,
            meta: {}, models: []
        }; }
        if (machine === void 0) { machine = {
            languages: [
                'apache', 'bash', 'coffeescript', 'cpp', 'cs', 'css', 'diff',
                'django', 'erb', 'go', 'ini', 'java', 'javascript', 'json',
                'makefile', 'markdown', 'nginx', 'objectivec', 'perl', 'php',
                'python', 'ruby', 'sql', 'stylus', 'typescript', 'xml'
            ],
            fallback: 'markdown',
            inclMeta: true,
            inclMarkup: true,
            // recommended
            min: 0.5,
            distance: 0.2,
            meta: {}
        }; }
        if (hasNatural === void 0) { hasNatural = true; }
        if (hasMachine === void 0) { hasMachine = true; }
        this.count = count;
        this.minLength = minLength;
        this.natural = natural;
        this.machine = machine;
        this.hasNatural = hasNatural;
        this.hasMachine = hasMachine;
        this.P = {
            nL: './fingerprints/',
            nM: './meta/natural/',
            mL: '../../node_modules/highlight.js/lib/languages/',
            mM: './meta/machine/',
            sM: './meta/script/'
        };
        this.R = {
            punct: /[·!-#%-*,-/:-;?-@_{}¡«»¿;＃％＊$§=]|[\u2000-\u206e⸀-\u2e7e\u3000-〾]|\ud809[\udc00-\udc7e]/g
        };
        this.upvoterScripts = {
            Jamo: 'ko', Kore: 'ko',
            Kana: 'ja', Hira: 'ja', Jpan: 'ja',
            Hans: 'cmn', Hant: 'cmn'
        };
        //this.register(this);
        isObject(count) && util_1.deepMixin(this, count);
        this.hasNatural = !!this.natural && !!Array.isArray(this.natural.languages) &&
            !!this.natural.languages.length;
        this.hasMachine = !!this.machine && !!Array.isArray(this.machine.languages) &&
            !!this.machine.languages.length;
        this.getMeta();
    }
    // create score array :
    Language.prototype.score = function (s, _script) {
        if (_script === void 0) { _script = { name: 'Latin', iso: 'Latn', score: 0 }; }
        var upvoter = this.upvoterScripts[_script.iso] || void 0;
        var myModel = this.createModel(s);
        var scores = [];
        for (var i in this.natural.models) {
            var model = this.natural.models[i];
            var _s = this.compare(myModel, model.trigrams);
            scores.push((!!upvoter && model.id === upvoter) ? ((_s + _script.score) / 1.8) : _s);
        }
        ;
        return scores;
    };
    // calculate the distance to the fingerprint model :
    Language.prototype.compare = function (model, modelKnown) {
        var _add = 1000;
        var dist = 0;
        var i, l;
        for (i = 0, l = model.length; i < l; i++) {
            if (modelKnown[model[i][0]]) {
                dist += Math.abs(model[i][1] - modelKnown[model[i][0]]);
            }
            else {
                dist += _add;
            }
        }
        return Math.floor(this.count * (1 - (dist / (_add * model.length))) * 1000) / 1000;
    };
    // create array of trigrams sorted by frequency :
    Language.prototype.createModel = function (s) {
        var trigrams = {}, trigramsSorted = [];
        var strArr = s.toLowerCase().split('');
        var i, l, key;
        for (i = 0, l = strArr.length - 2; i < l; i++) {
            var trigramKey = strArr[i] + strArr[i + 1] + strArr[i + 2] + '';
            if (!trigrams[trigramKey]) {
                trigrams[trigramKey] = 1;
            }
            else {
                trigrams[trigramKey] += 1;
            }
        }
        // convert trigram object to array
        for (key in trigrams) {
            trigramsSorted[trigramsSorted.length] = [key, trigrams[key]];
        }
        // sort trigrams array, high-to-low
        return trigramsSorted.sort(function (objA, objB) { return objB[1] - objA[1]; });
    };
    Language.prototype.bestMachine = function (s) {
        var _this = this;
        var o = highlight.highlightAuto(s);
        var norm = 24;
        var bestLangs = [o];
        if (!!o.second_best) {
            bestLangs.push(o.second_best);
        }
        if (!!this.machine.min && (o.relevance / norm) < this.machine.min) {
            if (!this.machine.fallback) {
                return [];
            }
            bestLangs = [{ language: this.machine.fallback, relevance: 0 }];
        }
        var fMax = (o.relevance / norm);
        var results = bestLangs.map(function (_o, i) {
            var max = (_o.relevance / norm);
            if (i === 1 && !!_this.machine.distance && max > (fMax - _this.machine.distance)) {
                return;
            }
            var r = { id: _o.language, rank: i + 1, score: max, name: '' };
            if (!!_this.machine.inclMeta) {
                var meta = (_this.machine.meta.hasOwnProperty(_o.language)) ?
                    _this.machine.meta[_o.language] : {};
                r.name = meta.name || '';
                delete meta.name;
                r.meta = meta;
            }
            if (!!_this.machine.inclMarkup) {
                r.markup = _o.value || '';
            }
            return r;
        }).filter(function (_o) { return !!_o; });
        return results.slice(0, this.count || 5);
    };
    Language.prototype.bestNatural = function (s) {
        var _this = this;
        var model;
        var bestScript = this.detectScript(s);
        var list = this.score(s.replace(/[\d]/g, ''), bestScript);
        var bestScore = 0;
        var bestLangs = [];
        for (var key in list) {
            var score = list[key];
            if (bestScore < score) {
                model = this.natural.models[key];
                bestLangs.unshift({ id: model.id, rank: 1, score: score, name: model.name });
                // sic! set new best value:
                bestScore = score;
            }
            ;
        }
        ;
        // console.log(this.natural.min, bestLangs)
        /* TODO FIXME fallback */
        if (!bestLangs.length || (!!this.natural.min && bestLangs[0].score < this.natural.min)) {
            if (!this.natural.fallback) {
                return [];
            }
            //TODO FIXME ARRAY console.log(this.natural.models)
            model = this.natural.models.filter(function (m) { return (m.id === _this.natural.fallback); })[0];
            bestLangs = !(model) ? [] : [{ id: model.id, rank: 1, score: 0, name: model.name }];
        }
        var fMax = bestLangs[0].score;
        var results = bestLangs.slice(0, this.count).map(function (o, i) {
            var meta = (_this.natural.meta.hasOwnProperty(o.id)) ? _this.natural.meta[o.id] : {};
            var bestRegion = (bestScript.iso === 'Bopo') ? 'TW' : meta.locales[bestScript.iso] || 'ZZ';
            o.locale = o.id + "-" + bestScript.iso + "-" + bestRegion;
            o.script = bestScript;
            if (i === 1 && !!_this.natural.distance && o.score > (fMax - _this.natural.distance)) {
                return;
            }
            o.rank = i + 1;
            if (!!_this.natural.inclMeta) {
                o.meta = meta;
            }
            return o;
        });
        if (!results[1]) {
            return results.slice(0, 1);
        }
        return results.filter(function (o) { return (!!o && o.score > _this.natural.min); }).slice(0, this.count || 5);
    };
    Language.prototype.getScript = function (id) {
        return scripts_1.default.filter(function (_o) { return (_o.iso === id || (!!_o.id && _o.id === id)); })[0];
    };
    Language.prototype.scriptScore = function (s, o) {
        return ((s.length - s.replace((o.detect || o.subdetect), '').length) / 100);
    };
    Language.prototype.bestCJK = function (s, scripts) {
        // http://unicode.org/faq/han_cjk.html
        var cjk = 'Hans';
        var nextIso = (scripts.length > 1 && scripts[1].iso);
        if (nextIso && this.upvoterScripts[nextIso]) {
            var koJa = ((scripts[1].score / scripts[0].score) > 0.5) ? scripts[1].iso : cjk;
            cjk = (koJa === 'Jamo') ? 'Kore' : 'Jpan';
        }
        var CJK = { name: this.getScript(cjk).name, iso: cjk, score: scripts[0].score };
        // can still be Chinese Traditional :
        if (CJK.iso === 'Hans') {
            var st = [this.getScript('Hans'), this.getScript('Hant')];
            var tScore = (this.scriptScore(s, st[1]));
            return ((tScore < 0.1) ?
                { name: st[0].name, iso: 'Hans', score: scripts[0].score } :
                { name: st[1].name, iso: 'Hant', score: tScore });
        }
        return CJK;
    };
    Language.prototype.detectScript = function (s) {
        var _this = this;
        s = s.replace(/[\s\d]/g, '').replace(this.R.punct, '');
        var scripts = scripts_1.default.map(function (o) {
            if (!o.detect) {
                return { score: 0, iso: null };
            }
            return { name: o.name, iso: (o.iso || null), score: _this.scriptScore(s, o) };
        }).filter(function (a) { return !!a.score; }).sort(function (a, b) { return b.score - a.score; });
        if (!scripts.length) {
            return [];
        }
        else if (scripts[0].score > 1) {
            scripts[0].score = 1;
        }
        // can still be Chinese or Japanese, Korean (Han mixed) languages :
        return (!scripts[0].iso) ? this.bestCJK(s, scripts) : scripts[0];
    };
    Language.prototype.detect = function (s) {
        if (!this.hasNatural) {
            return (!this.hasMachine) ? Promise_1.default.reject(void 0) : this.bestMachine(s);
        }
        return (!this.hasMachine) ? this.bestNatural(s) : {
            natural: (this.bestNatural(s)),
            machine: (this.bestMachine(s))
        };
    };
    Language.prototype.fingerprintModels = function (l) {
        var _this = this;
        var model = require(this.P.nL + l).default;
        if (!!model.trigrams) {
            this.natural.models.push(model);
            this.natural.meta[l] = require(this.P.nM + l).default;
        }
        if (!!model.dependencies) {
            model.dependencies.forEach(function (_l) {
                var tModel = require(_this.P.nL + _l).default;
                if (!_this.natural.meta[tModel.id]) {
                    _this.natural.meta[tModel.id] = require(_this.P.nM + tModel.id).default;
                }
                _this.natural.models.push(tModel);
            });
        }
    };
    Language.prototype.getMeta = function (type, lang) {
        var _this = this;
        if (typeof type === 'string' && typeof lang === 'string') {
            var meta = !!(this.natural.meta[lang]) ? this.natural.meta[lang] :
                this.natural.meta[lang.split('-')[0]];
            if (!meta) {
                try {
                    meta = require(this.P.nM + lang).default;
                }
                catch (e) {
                    meta = require(this.P.nM + lang.split('-')[0]).default;
                }
            }
            return meta || {};
        }
        if ((!!this.hasNatural && typeof type !== 'string') || type === 'natural') {
            this.natural.languages.forEach(this.fingerprintModels.bind(this));
        }
        if ((!!this.hasMachine && typeof type !== 'string') || type === 'machine') {
            this.machine.languages.forEach(function (l) {
                highlight.registerLanguage(l, require(_this.P.mL + l));
                _this.machine.meta[l] = require(_this.P.mM + l).default;
            });
        }
    };
    Language.prototype.getNaturalMeta = function (locale) {
        return this.getMeta('natural', locale);
    };
    Language.prototype.getMachineMeta = function (locale) {
        return this.getMeta('machine', locale);
    };
    Language.prototype.getLocalLangName = function (locale) {
        return this.getMeta('natural', locale).nameT || '';
    };
    return Language;
}());
exports.default = Language;
