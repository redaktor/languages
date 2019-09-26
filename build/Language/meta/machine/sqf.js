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
        name: 'SQF',
        wiki: '',
        type: 'programming',
        languageId: 332,
        color: '#3F3F3F',
        extensions: ['.sqf', '.hqf'],
        aceMode: 'text',
        tmScope: 'source.sqf'
    };
    exports.default = meta;
});
//# sourceMappingURL=sqf.js.map