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
        name: 'Elixir',
        wiki: 'Elixir_(programming_language)',
        type: 'programming',
        languageId: 100,
        color: '#6e4a7e',
        extensions: ['.ex', '.exs'],
        aceMode: 'elixir',
        interpreters: ['elixir'],
        filenames: ['mix.lock']
    };
    exports.default = meta;
});
//# sourceMappingURL=elixir.js.map