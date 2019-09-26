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
        name: 'Ontong Java',
        nameT: 'Ontong Java',
        iso3: 'ojv',
        wiki: 'Ontong_Java_language',
        names: 'Leuangiua,Lord Howe,Luangiua,Luaniua'
    });
});
//# sourceMappingURL=ojv.js.map