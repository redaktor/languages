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
        name: 'Quechua, Northern Conchucos Ancash',
        nameT: 'Quechua, Northern Conchucos Ancash',
        iso3: 'qxn',
        wiki: 'Ancash_Quechua',
        names: 'Conchucos Quechua,Northern Conchucos Quechua,Quechua',
        hasDetect: true
    });
});
//# sourceMappingURL=qxn.js.map