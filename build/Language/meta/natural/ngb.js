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
        name: 'Ngbandi, Northern',
        nameT: 'Ngbandi, Northern',
        iso3: 'ngb',
        wiki: 'Ngbandi_language',
        names: 'Baza,Mongwandi,Ngwandi'
    });
});
//# sourceMappingURL=ngb.js.map