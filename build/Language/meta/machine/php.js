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
        name: 'PHP',
        wiki: 'PHP',
        type: 'programming',
        languageId: 272,
        color: '#4F5D95',
        aliases: ['inc', 'php3', 'php4', 'php5', 'php6'],
        extensions: ['.php', '.aw', '.ctp', '.fcgi', '.inc', '.php3', '.php4', '.php5', '.phps', '.phpt'],
        aceMode: 'php',
        tmScope: 'text.html.php',
        interpreters: ['php'],
        codemirrorMode: 'php',
        codemirrorMimeType: 'application/x-httpd-php',
        filenames: ['.php_cs', '.php_cs.dist', 'Phakefile']
    };
    exports.default = meta;
});
//# sourceMappingURL=php.js.map