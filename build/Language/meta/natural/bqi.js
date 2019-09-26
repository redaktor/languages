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
        name: 'Bakhtiari',
        nameT: 'Bakhtiari',
        iso3: 'bqi',
        wiki: 'Bakhtiari_dialect',
        names: 'Lori,Lori-ye Khaveri,Luri'
    });
});
//# sourceMappingURL=bqi.js.map