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
        name: 'DockerFile',
        wiki: 'Docker_(software)',
        type: 'data',
        languageId: 89,
        extensions: ['.dockerfile'],
        aceMode: 'dockerfile',
        tmScope: 'source.dockerfile',
        codemirrorMode: 'dockerfile',
        codemirrorMimeType: 'text/x-dockerfile',
        filenames: ['Dockerfile']
    };
    exports.default = meta;
});
//# sourceMappingURL=dockerfile.js.map