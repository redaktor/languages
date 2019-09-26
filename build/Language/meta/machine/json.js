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
        name: 'JSON',
        wiki: 'JSON',
        type: 'data',
        languageId: 174,
        extensions: ['.json', '.geojson', '.JSON-tmLanguage', '.topojson'],
        aceMode: 'json',
        tmScope: 'source.json',
        codemirrorMode: 'javascript',
        codemirrorMimeType: 'application/json',
        group: 'JavaScript',
        filenames: ['.arcconfig', '.jshintrc', 'composer.lock', 'mcmod.info']
    };
    exports.default = meta;
});
//# sourceMappingURL=json.js.map