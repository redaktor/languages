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
        name: 'PureBasic',
        wiki: 'PureBasic',
        type: 'programming',
        languageId: 301,
        color: '#5a6986',
        extensions: ['.pb', '.pbi'],
        aceMode: 'text',
        tmScope: 'none'
    };
    exports.default = meta;
});
//# sourceMappingURL=purebasic.js.map