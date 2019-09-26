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
        name: 'Wounaan',
        nameT: 'Wounaan',
        iso3: 'noa',
        wiki: 'Wounaan_language',
        names: 'Waumeo,Waun Meo,Waunana,Woun Meo,Chanco,Chocama,Noanama,Noenama,Nonama,Wounmeu',
        hasDetect: true
    });
});
//# sourceMappingURL=noa.js.map