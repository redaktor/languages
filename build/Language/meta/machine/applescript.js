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
        name: 'AppleScript',
        wiki: 'AppleScript',
        type: 'programming',
        languageId: 19,
        color: '#101F1F',
        aliases: ['osascript'],
        extensions: ['.applescript', '.scpt'],
        aceMode: 'applescript',
        interpreters: ['osascript']
    };
    exports.default = meta;
});
//# sourceMappingURL=applescript.js.map