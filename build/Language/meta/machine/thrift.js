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
        name: 'Apache Thrift',
        wiki: 'Apache_Thrift',
        type: 'programming',
        languageId: 374,
        extensions: ['.thrift'],
        aceMode: 'text',
        tmScope: 'source.thrift'
    };
    exports.default = meta;
});
//# sourceMappingURL=thrift.js.map