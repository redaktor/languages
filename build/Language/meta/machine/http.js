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
        name: 'Hypertext Transfer Protocol (HTTP)',
        wiki: 'Hypertext_Transfer_Protocol',
        type: 'data',
        languageId: 152,
        extensions: ['.http'],
        aceMode: 'text',
        tmScope: 'source.httpspec',
        codemirrorMode: 'http',
        codemirrorMimeType: 'message/http'
    };
    exports.default = meta;
});
//# sourceMappingURL=http.js.map