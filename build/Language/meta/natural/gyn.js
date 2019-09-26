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
        name: 'Creole English, Guyanese',
        nameT: 'Creole English, Guyanese',
        iso3: 'gyn',
        wiki: 'Guyanese_Creole',
        names: 'Creolese,Guyanese Creole'
    });
});
//# sourceMappingURL=gyn.js.map