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
        name: 'Quichua, Northern Pastaza',
        nameT: 'Quichua, Northern Pastaza',
        iso3: 'qvz',
        wiki: 'Kichwa_language',
        names: 'Alama,Bobonaza Quichua,Canelos Quichua,Pastaza Quichua,Sarayacu Quichua,Bobonaza,Tigre Quechua',
        hasDetect: true
    });
});
//# sourceMappingURL=qvz.js.map