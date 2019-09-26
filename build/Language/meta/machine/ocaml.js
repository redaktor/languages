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
        name: 'OCaml',
        wiki: 'OCaml',
        type: 'programming',
        languageId: 255,
        color: '#3be133',
        extensions: ['.ml', '.eliom', '.eliomi', '.ml4', '.mli', '.mll', '.mly'],
        aceMode: 'ocaml',
        tmScope: 'source.ocaml',
        interpreters: ['ocaml', 'ocamlrun', 'ocamlscript'],
        codemirrorMode: 'mllike',
        codemirrorMimeType: 'text/x-ocaml'
    };
    exports.default = meta;
});
//# sourceMappingURL=ocaml.js.map