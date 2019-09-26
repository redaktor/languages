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
        name: 'Groovy',
        wiki: 'Groovy_(programming_language)',
        type: 'programming',
        languageId: 142,
        color: '#e69f56',
        extensions: ['.groovy', '.grt', '.gtpl', '.gvy'],
        aceMode: 'groovy',
        interpreters: ['groovy'],
        codemirrorMode: 'groovy',
        codemirrorMimeType: 'text/x-groovy',
        filenames: ['Jenkinsfile']
    };
    exports.default = meta;
});
//# sourceMappingURL=groovy.js.map