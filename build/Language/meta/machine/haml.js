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
        name: 'Haml',
        wiki: 'Haml',
        type: 'markup',
        languageId: 154,
        extensions: ['.haml', '.haml.deface'],
        aceMode: 'haml',
        codemirrorMode: 'haml',
        codemirrorMimeType: 'text/x-haml',
        group: 'HTML'
    };
    exports.default = meta;
});
//# sourceMappingURL=haml.js.map