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
        name: 'Quechua, South Bolivian',
        nameT: 'Quechua, South Bolivian',
        iso3: 'quh',
        wiki: 'South_Bolivian_Quechua',
        names: 'Central Bolivian Quechua,Quechua Boliviano',
        hasDetect: true
    });
});
//# sourceMappingURL=quh.js.map