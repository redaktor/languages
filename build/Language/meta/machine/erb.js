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
        name: 'Embedded Ruby Template',
        wiki: 'ERuby#erb',
        type: 'markup',
        languageId: 150,
        aliases: ['erb'],
        extensions: ['.erb', '.erb.deface'],
        aceMode: 'text',
        tmScope: 'text.html.erb',
        codemirrorMode: 'htmlembedded',
        codemirrorMimeType: 'application/x-erb',
        group: 'HTML'
    };
    exports.default = meta;
});
//# sourceMappingURL=erb.js.map