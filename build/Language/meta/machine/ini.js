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
        name: 'INI file',
        wiki: 'INI_file',
        type: 'data',
        languageId: 163,
        aliases: ['dosini'],
        extensions: ['.ini', '.cfg', '.prefs', '.pro', '.properties'],
        aceMode: 'ini',
        tmScope: 'source.ini',
        codemirrorMode: 'properties',
        codemirrorMimeType: 'text/x-properties'
    };
    exports.default = meta;
});
//# sourceMappingURL=ini.js.map