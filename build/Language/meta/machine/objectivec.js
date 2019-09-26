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
        name: 'Objective-C',
        wiki: 'Objective-C',
        type: 'programming',
        languageId: 257,
        color: '#438eff',
        aliases: ['obj-c', 'objc', 'objectivec'],
        extensions: ['.m', '.h'],
        aceMode: 'objectivec',
        tmScope: 'source.objc',
        codemirrorMode: 'clike',
        codemirrorMimeType: 'text/x-objectivec'
    };
    exports.default = meta;
});
//# sourceMappingURL=objectivec.js.map