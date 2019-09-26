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
        name: 'Krahn, Eastern',
        nameT: 'Krahn, Eastern',
        iso3: 'kqo',
        wiki: 'Konobo_language',
        names: 'Eastern Kran,Kran'
    });
});
//# sourceMappingURL=kqo.js.map