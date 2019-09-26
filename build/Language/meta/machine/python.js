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
        name: 'Python',
        wiki: 'Python_(programming_language)',
        type: 'programming',
        languageId: 303,
        color: '#3572A5',
        aliases: ['rusthon', 'py', 'gyp'],
        extensions: ['.py', '.bzl', '.cgi', '.fcgi', '.gyp', '.gypi', '.lmi', '.py3', '.pyde', '.pyp', '.pyt', '.pyw', '.rpy', '.spec', '.tac', '.wsgi', '.xpy'],
        aceMode: 'python',
        interpreters: ['python', 'python2', 'python3'],
        codemirrorMode: 'python',
        codemirrorMimeType: 'text/x-python',
        filenames: ['.gclient', 'BUCK', 'BUILD', 'SConscript', 'SConstruct', 'Snakefile', 'wscript']
    };
    exports.default = meta;
});
//# sourceMappingURL=python.js.map