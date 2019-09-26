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
        name: 'YAML',
        wiki: 'YAML',
        type: 'data',
        languageId: 407,
        aliases: ['yml', 'YAML'],
        extensions: ['.yml', '.reek', '.rviz', '.sublime-syntax', '.syntax', '.yaml', '.yaml-tmlanguage'],
        aceMode: 'yaml',
        tmScope: 'source.yaml',
        codemirrorMode: 'yaml',
        codemirrorMimeType: 'text/x-yaml',
        filenames: ['.clang-format']
    };
    exports.default = meta;
});
//# sourceMappingURL=yaml.js.map