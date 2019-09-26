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
        name: 'Khassonke ',
        nameT: 'Khassonke ',
        iso3: 'kao',
        wiki: 'Kassonke_language',
        names: 'Kasonke,Kasso,Kasson,Kassonke,Khasonke,Khassonka,Khassonké,Malinke,Maninka,Xaasonga,Xasonga,Xasongo,Xasonke,Xaasongaxango',
        hasDetect: true
    });
});
//# sourceMappingURL=kao.js.map