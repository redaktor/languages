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
        name: 'Makefile',
        wiki: 'Makefile',
        type: 'programming',
        languageId: 220,
        color: '#427819',
        aliases: ['bsdmake', 'make', 'mf'],
        extensions: ['.mak', '.d', '.make', '.mk', '.mkfile'],
        aceMode: 'makefile',
        interpreters: ['make'],
        codemirrorMode: 'cmake',
        codemirrorMimeType: 'text/x-cmake',
        filenames: ['BSDmakefile', 'GNUmakefile', 'Kbuild', 'Makefile', 'Makefile.am', 'Makefile.boot', 'Makefile.frag', 'Makefile.in', 'Makefile.inc', 'makefile', 'makefile.sco', 'mkfile']
    };
    exports.default = meta;
});
//# sourceMappingURL=makefile.js.map