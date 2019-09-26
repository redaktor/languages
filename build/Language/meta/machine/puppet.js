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
        name: 'Puppet',
        wiki: 'Puppet_(software)',
        type: 'programming',
        languageId: 299,
        color: '#302B6D',
        extensions: ['.pp'],
        aceMode: 'text',
        tmScope: 'source.puppet',
        codemirrorMode: 'puppet',
        codemirrorMimeType: 'text/x-puppet',
        filenames: ['Modulefile']
    };
    exports.default = meta;
});
//# sourceMappingURL=puppet.js.map