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
        name: 'Tepehua Tlachichilco',
        nameT: 'Tepehua Tlachichilco',
        iso3: 'tpt',
        wiki: 'Tlachichilco_Tepehua',
        hasDetect: true
    });
});
//# sourceMappingURL=tpt.js.map