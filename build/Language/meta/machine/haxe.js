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
        name: 'Haxe',
        wiki: 'Haxe',
        type: 'programming',
        languageId: 158,
        color: '#df7900',
        extensions: ['.hx', '.hxsl'],
        aceMode: 'haxe',
        tmScope: 'source.haxe.2',
        codemirrorMode: 'haxe',
        codemirrorMimeType: 'text/x-haxe'
    };
    exports.default = meta;
});
//# sourceMappingURL=haxe.js.map