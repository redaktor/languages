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
        name: 'Dari, Zoroastrian',
        nameT: 'دَرِي',
        iso3: 'gbz',
        wiki: 'Zoroastrian_Dari_language',
        names: 'Dari ("Gabar","Gabri","Yazdi")'
    });
});
//# sourceMappingURL=gbz.js.map