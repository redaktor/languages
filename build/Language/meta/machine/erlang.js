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
        name: 'Erlang',
        wiki: 'Erlang_(programming_language)',
        type: 'programming',
        languageId: 104,
        color: '#B83998',
        extensions: ['.erl', '.app.src', '.es', '.escript', '.hrl', '.xrl', '.yrl'],
        aceMode: 'erlang',
        interpreters: ['escript'],
        codemirrorMode: 'erlang',
        codemirrorMimeType: 'text/x-erlang',
        filenames: ['rebar.config', 'rebar.config.lock', 'rebar.lock']
    };
    exports.default = meta;
});
//# sourceMappingURL=erlang.js.map