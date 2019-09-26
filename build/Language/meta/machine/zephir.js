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
        name: 'ZEPHIR PHP',
        wiki: 'PHP#ZEPHIR',
        type: 'programming',
        languageId: 410,
        color: '#118f9e',
        extensions: ['.zep'],
        aceMode: 'php',
        tmScope: 'source.php.zephir'
    };
    exports.default = meta;
});
//# sourceMappingURL=zephir.js.map