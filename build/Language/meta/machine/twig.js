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
        name: 'Twig',
        wiki: 'Twig_(template_engine)',
        type: 'markup',
        languageId: 377,
        extensions: ['.twig'],
        aceMode: 'twig',
        tmScope: 'text.html.twig',
        codemirrorMode: 'twig',
        codemirrorMimeType: 'text/x-twig',
        group: 'HTML'
    };
    exports.default = meta;
});
//# sourceMappingURL=twig.js.map