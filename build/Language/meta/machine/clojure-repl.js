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
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta = {
        name: 'Clojure repl',
        wiki: 'Clojure',
        type: 'programming',
        languageId: 62,
        color: '#db5855',
        extensions: ['.clj', '.boot', '.cl2', '.cljc', '.cljs', '.cljs.hl', '.cljscm', '.cljx', '.hic'],
        aceMode: 'clojure',
        codemirrorMode: 'clojure',
        codemirrorMimeType: 'text/x-clojure',
        filenames: ['riemann.config']
    };
    exports.default = meta;
});
//# sourceMappingURL=clojure-repl.js.map