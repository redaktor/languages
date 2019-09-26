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
        name: 'Kashubian',
        nameT: 'Kaszëbsczi Jãzëk',
        iso2: 'csb',
        iso3: 'csb',
        wiki: 'Kashubian_language',
        names: 'Cashubian,Cassubian,Kaszubski',
        hasDetect: true
    });
});
//# sourceMappingURL=csb.js.map