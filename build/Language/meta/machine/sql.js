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
        name: 'SQL',
        wiki: 'SQL',
        type: 'data',
        languageId: 333,
        extensions: ['.sql', '.cql', '.ddl', '.inc', '.prc', '.tab', '.udf', '.viw'],
        aceMode: 'sql',
        tmScope: 'source.sql',
        codemirrorMode: 'sql',
        codemirrorMimeType: 'text/x-sql'
    };
    exports.default = meta;
});
//# sourceMappingURL=sql.js.map