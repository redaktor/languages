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
        name: 'Kungarakany',
        nameT: 'Kungarakany',
        iso3: 'ggk',
        wiki: 'Kungarakany_language',
        names: 'Gunerakan,Gungaragan,Gungarakanj,Kangarraga,Kungarakan'
    });
});
//# sourceMappingURL=ggk.js.map