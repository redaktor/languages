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
        name: 'Vim',
        wiki: 'Vim_(text_editor)',
        type: 'programming',
        languageId: 388,
        color: '#199f4b',
        aliases: ['vim', 'viml', 'nvim'],
        extensions: ['.vim'],
        aceMode: 'text',
        tmScope: 'source.viml',
        filenames: ['.nvimrc', '.vimrc', '_vimrc', 'gvimrc', 'nvimrc', 'vimrc']
    };
    exports.default = meta;
});
//# sourceMappingURL=vim.js.map