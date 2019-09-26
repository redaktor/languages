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
        name: 'Gradle',
        wiki: 'Gradle',
        type: 'data',
        languageId: 136,
        extensions: ['.gradle'],
        aceMode: 'text',
        tmScope: 'source.groovy.gradle'
    };
    exports.default = meta;
});
//# sourceMappingURL=gradle.js.map