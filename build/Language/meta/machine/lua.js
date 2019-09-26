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
        name: 'Lua',
        wiki: 'Lua_(programming_language)',
        type: 'programming',
        languageId: 213,
        color: '#000080',
        extensions: ['.lua', '.fcgi', '.nse', '.pd_lua', '.rbxs', '.wlua'],
        aceMode: 'lua',
        interpreters: ['lua'],
        codemirrorMode: 'lua',
        codemirrorMimeType: 'text/x-lua'
    };
    exports.default = meta;
});
//# sourceMappingURL=lua.js.map