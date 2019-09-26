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
        name: 'CoffeeScript',
        wiki: 'CoffeeScript',
        type: 'programming',
        languageId: 63,
        color: '#244776',
        aliases: ['coffee', 'coffee-script', 'cson', 'iced'],
        extensions: ['.coffee', '._coffee', '.cake', '.cjsx', '.iced'],
        aceMode: 'coffee',
        tmScope: 'source.coffee',
        interpreters: ['coffee'],
        codemirrorMode: 'coffeescript',
        codemirrorMimeType: 'text/x-coffeescript',
        filenames: ['Cakefile']
    };
    exports.default = meta;
});
//# sourceMappingURL=coffeescript.js.map