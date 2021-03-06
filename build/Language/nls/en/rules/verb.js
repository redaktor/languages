(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    zip = { conjugate: { infinitive: [{ reg: /(eed)$/i,
                    repl: { infinitive: 0,
                        present: '$1s',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: '$1er' } },
                { reg: /(e)(ep)$/i,
                    repl: { infinitive: 0,
                        present: '$1$2s',
                        gerund: '$1$2ing',
                        past: '$1pt',
                        doer: '$1$2er' } },
                { reg: /(a[tg]|i[zn]|ur|nc|gl|is)e$/i,
                    repl: { infinitive: 0,
                        present: '$1es',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /([i|f|rr])y$/i,
                    repl: { infinitive: 0,
                        present: '$1ies',
                        gerund: '$1ying',
                        past: '$1ied',
                        doer: 0 } },
                { reg: /([td]er)$/i,
                    repl: { infinitive: 0,
                        present: '$1s',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /([bd]l)e$/i,
                    repl: { infinitive: 0,
                        present: '$1es',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(ish|tch|ess)$/i,
                    repl: { infinitive: 0,
                        present: '$1es',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(ion|end|e[nc]t)$/i,
                    repl: { infinitive: 0,
                        present: '$1s',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(om)e$/i,
                    repl: { infinitive: 0,
                        present: '$1es',
                        gerund: '$1ing',
                        past: 'ame',
                        doer: 0 } },
                { reg: /([aeiu])([pt])$/i,
                    repl: { infinitive: 0,
                        present: '$1$2s',
                        gerund: '$1$2$2ing',
                        past: '$1$2',
                        doer: 0 } },
                { reg: /(er)$/i,
                    repl: { infinitive: 0,
                        present: '$1s',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(en)$/i,
                    repl: { infinitive: 0,
                        present: '$1s',
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } }],
            present: [{ reg: /(ies)$/i,
                    repl: { infinitive: 'y',
                        present: 0,
                        gerund: 'ying',
                        past: 'ied',
                        doer: 0 } },
                { reg: /(tch|sh)es$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(ss)es$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /([tzlshicgrvdnkmu])es$/i,
                    repl: { infinitive: '$1e',
                        present: 0,
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(n[dtk]|c[kt]|[eo]n|i[nl]|er|a[ytrl])s$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(ow)s$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ing',
                        past: 'ew',
                        doer: 0 } },
                { reg: /(op)s$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ping',
                        past: '$1ped',
                        doer: 0 } },
                { reg: /([eirs])ts$/i,
                    repl: { infinitive: '$1t',
                        present: 0,
                        gerund: '$1tting',
                        past: '$1tted',
                        doer: 0 } },
                { reg: /(ll)s$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(el)s$/i,
                    repl: { infinitive: '$1',
                        present: 0,
                        gerund: '$1ling',
                        past: '$1led',
                        doer: 0 } },
                { reg: /(ip)es$/i,
                    repl: { infinitive: '$1e',
                        present: 0,
                        gerund: '$1ing',
                        past: '$1ed',
                        doer: 0 } },
                { reg: /ss$/i,
                    repl: { infinitive: 'ss',
                        present: 0,
                        gerund: 'ssing',
                        past: 'ssed',
                        doer: 0 } },
                { reg: /s$/i,
                    repl: { infinitive: '', present: 0, gerund: 'ing', past: 'ed', doer: 0 } }],
            gerund: [{ reg: /pping$/i,
                    repl: { infinitive: 'p',
                        present: 'ps',
                        gerund: 0,
                        past: 'pped',
                        doer: 0 } },
                { reg: /lling$/i,
                    repl: { infinitive: 'll',
                        present: 'lls',
                        gerund: 0,
                        past: 'lled',
                        doer: 0 } },
                { reg: /tting$/i,
                    repl: { infinitive: 't', present: 'ts', gerund: 0, past: 't', doer: 0 } },
                { reg: /ssing$/i,
                    repl: { infinitive: 'ss',
                        present: 'sses',
                        gerund: 0,
                        past: 'ssed',
                        doer: 0 } },
                { reg: /gging$/i,
                    repl: { infinitive: 'g',
                        present: 'gs',
                        gerund: 0,
                        past: 'gged',
                        doer: 0 } },
                { reg: /([^aeiou])ying$/i,
                    repl: { infinitive: '$1y',
                        present: '$1ies',
                        gerund: 0,
                        past: '$1ied',
                        doer: '$1ier' } },
                { reg: /(i.)ing$/i,
                    repl: { infinitive: '$1e',
                        present: '$1es',
                        gerund: 0,
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(u[rtcb]|[bdtpkg]l|n[cg]|a[gdkvtc]|[ua]s|[dr]g|yz|o[rlsp]|cre)ing$/i,
                    repl: { infinitive: '$1e',
                        present: '$1es',
                        gerund: 0,
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(ch|sh)ing$/i,
                    repl: { infinitive: '$1',
                        present: '$1es',
                        gerund: 0,
                        past: '$1ed',
                        doer: 0 } },
                { reg: /(..)ing$/i,
                    repl: { infinitive: '$1',
                        present: '$1s',
                        gerund: 0,
                        past: '$1ed',
                        doer: 0 } }],
            past: [{ reg: /(ued)$/i,
                    repl: { infinitive: 0,
                        present: 'ues',
                        gerund: 'uing',
                        past: 'ued',
                        doer: 'uer' } },
                { reg: /(e|i)lled$/i,
                    repl: { infinitive: 0,
                        present: '$1lls',
                        gerund: '$1lling',
                        past: '$1lled',
                        doer: '$1ller' } },
                { reg: /(sh|ch)ed$/i,
                    repl: { infinitive: '$1',
                        present: '$1es',
                        gerund: '$1ing',
                        past: 0,
                        doer: '$1er' } },
                { reg: /(tl|gl)ed$/i,
                    repl: { infinitive: '$1e',
                        present: '$1es',
                        gerund: '$1ing',
                        past: 0,
                        doer: '$1er' } },
                { reg: /(ss)ed$/i,
                    repl: { infinitive: '$1',
                        present: '$1es',
                        gerund: '$1ing',
                        past: 0,
                        doer: '$1er' } },
                { reg: /pped$/i,
                    repl: { infinitive: 'p',
                        present: 'ps',
                        gerund: 'pping',
                        past: 0,
                        doer: 'pper' } },
                { reg: /tted$/i,
                    repl: { infinitive: 't',
                        present: 'ts',
                        gerund: 'tting',
                        past: 0,
                        doer: 'tter' } },
                { reg: /gged$/i,
                    repl: { infinitive: 'g',
                        present: 'gs',
                        gerund: 'gging',
                        past: 0,
                        doer: 'gger' } },
                { reg: /(h|ion|n[dt]|ai.|[cs]t|pp|all|ss|tt|int|ail|ld|en|oo.|er|k|pp|w|ou.|rt|ght|rm)ed$/i,
                    repl: { infinitive: '$1',
                        present: '$1s',
                        gerund: '$1ing',
                        past: 0,
                        doer: '$1er' } },
                { reg: /(..[^aeiou])ed$/i,
                    repl: { infinitive: '$1e',
                        present: '$1es',
                        gerund: '$1ing',
                        past: 0,
                        doer: '$1er' } },
                { reg: /ied$/i,
                    repl: { infinitive: 'y',
                        present: 'ies',
                        gerund: 'ying',
                        past: 0,
                        doer: 'ier' } },
                { reg: /(.o)ed$/i,
                    repl: { infinitive: '$1o',
                        present: '$1os',
                        gerund: '$1oing',
                        past: 0,
                        doer: '$1oer' } },
                { reg: /(.i)ed$/i,
                    repl: { infinitive: '$1',
                        present: '$1s',
                        gerund: '$1ing',
                        past: 0,
                        doer: '$1er' } },
                { reg: /([rl])ew$/i,
                    repl: { infinitive: '$1ow',
                        present: '$1ows',
                        gerund: '$1owing',
                        past: 0,
                        doer: 0 } },
                { reg: /([pl])t$/i,
                    repl: { infinitive: '$1t',
                        present: '$1ts',
                        gerund: '$1ting',
                        past: 0,
                        doer: 0 } }] },
        detect: function (t, i, tokens) {
            if (!r)
                return false;
            var id;
            if (r instanceof Array) {
                for (id = 0; id < r.length; id++) {
                    var rule = r[id];
                    var set = setToken(t, i, tokens, rule.tag + 'Rule_' + id, rule, countStart);
                    if (set)
                        return set;
                }
            }
            else {
                for (id in r) {
                    var rule = r[id];
                    var set = setToken(t, i, tokens, id, rule, countStart);
                    if (set)
                        return set;
                }
            }
            return (noFallback) ? false : t;
        },
        unPrefix: /^(over|under|re|anti|full)\-?/i,
        fallback: function (w, o) {
            if (w.length > 4) {
                o.infinitive = w.replace(/ed$/, '');
            }
            else {
                o.infinitive = w.replace(/d$/, '');
            }
            if (w.match(/[^aeiou]$/)) {
                o.gerund = [w, 'ing'].join('');
                o.past = [w, 'ed'].join('');
                if (w.match(/ss$/)) {
                    o.present = [w, 'es'].join('');
                }
                else {
                    o.present = [w, 's'].join('');
                }
            }
            else {
                o.gerund = w.replace(/[aeiou]$/, 'ing');
                o.past = w.replace(/[aeiou]$/, 'ed');
                o.present = w.replace(/[aeiou]$/, 'es');
            }
            return o;
        },
        fulfill: function (o) {
            return {
                gerund: [o.infinitive, 'ing'],
                present: [o.infinitive, 's'],
                past: [o.infinitive, 'ed'],
                future: ['will ', o.infinitive],
                perfect: ['have ', o.past],
                pluperfect: ['had ', o.past],
                futurePerfect: ['will have ', o.past]
            };
        },
        doer: [{ matches: /e$/i, replacer: 'er' },
            { matches: /([aeiou])([mlgp])$/i, replacer: '$1$2$2er' },
            { matches: /([rlf])y$/i, replacer: '$1ier' },
            { matches: /^(.?.[aeiou])t$/i, replacer: '$1tter' }],
        doerReplace: function (t, i, tokens) {
            if (!r)
                return false;
            var id;
            if (r instanceof Array) {
                for (id = 0; id < r.length; id++) {
                    var rule = r[id];
                    var set = setToken(t, i, tokens, rule.tag + 'Rule_' + id, rule, countStart);
                    if (set)
                        return set;
                }
            }
            else {
                for (id in r) {
                    var rule = r[id];
                    var set = setToken(t, i, tokens, id, rule, countStart);
                    if (set)
                        return set;
                }
            }
            return (noFallback) ? false : t;
        },
        tenseReplace: function (t, i, tokens) {
            if (!r)
                return false;
            var id;
            if (r instanceof Array) {
                for (id = 0; id < r.length; id++) {
                    var rule = r[id];
                    var set = setToken(t, i, tokens, rule.tag + 'Rule_' + id, rule, countStart);
                    if (set)
                        return set;
                }
            }
            else {
                for (id in r) {
                    var rule = r[id];
                    var set = setToken(t, i, tokens, id, rule, countStart);
                    if (set)
                        return set;
                }
            }
            return (noFallback) ? false : t;
        },
        suffixes: { ing: 'gerund',
            ate: 'infinitive',
            ize: 'infinitive',
            tion: 'infinitive',
            rify: 'infinitive',
            ress: 'infinitive',
            ify: 'infinitive',
            age: 'infinitive',
            nce: 'infinitive',
            ect: 'infinitive',
            ise: 'infinitive',
            ine: 'infinitive',
            ish: 'infinitive',
            ace: 'infinitive',
            ash: 'infinitive',
            ure: 'infinitive',
            tch: 'infinitive',
            end: 'infinitive',
            ack: 'infinitive',
            and: 'infinitive',
            ute: 'infinitive',
            ade: 'infinitive',
            ock: 'infinitive',
            ite: 'infinitive',
            ase: 'infinitive',
            ose: 'infinitive',
            use: 'infinitive',
            ive: 'infinitive',
            int: 'infinitive',
            nge: 'infinitive',
            lay: 'infinitive',
            est: 'infinitive',
            ain: 'infinitive',
            ant: 'infinitive',
            eed: 'infinitive',
            er: 'infinitive',
            le: 'infinitive',
            ed: 'past',
            lt: 'past',
            nt: 'past',
            pt: 'past',
            ew: 'past',
            ld: 'past',
            rks: 'present',
            cks: 'present',
            nks: 'present',
            ngs: 'present',
            mps: 'present',
            tes: 'present',
            zes: 'present',
            ers: 'present',
            les: 'present',
            acks: 'present',
            ends: 'present',
            ands: 'present',
            ocks: 'present',
            lays: 'present',
            eads: 'present',
            lls: 'present',
            els: 'present',
            ils: 'present',
            ows: 'present',
            nds: 'present',
            ays: 'present',
            ams: 'present',
            ars: 'present',
            ops: 'present',
            ffs: 'present',
            als: 'present',
            urs: 'present',
            lds: 'present',
            ews: 'present',
            ips: 'present',
            es: 'present',
            ts: 'present',
            ns: 'present',
            s: 'present' } };
    return zip;
});
//# sourceMappingURL=verb.js.map