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
        name: 'Ngile',
        nameT: 'Ngile',
        iso3: 'jle',
        wiki: 'Ngile_language',
        names: 'Angire,Arra,Daloka,Darra,Masakin,Mesakin,Taloka'
    });
});
//# sourceMappingURL=jle.js.map