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
        name: 'Perl',
        wiki: 'Perl',
        type: 'programming',
        languageId: 282,
        color: '#0298c3',
        extensions: ['.pl', '.al', '.cgi', '.fcgi', '.perl', '.ph', '.plx', '.pm', '.pod', '.psgi', '.t'],
        aceMode: 'perl',
        tmScope: 'source.perl',
        interpreters: ['perl'],
        codemirrorMode: 'perl',
        codemirrorMimeType: 'text/x-perl'
    };
    exports.default = meta;
});
//# sourceMappingURL=perl.js.map