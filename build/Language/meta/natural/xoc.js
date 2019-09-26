(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'O’chi’chi’',
        nameT: 'O’chi’chi’',
        iso3: 'xoc',
        wiki: 'O%E2%80%99chi%E2%80%99chi%E2%80%99_language'
    });
});
//# sourceMappingURL=xoc.js.map