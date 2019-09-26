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
        name: 'Pashto, Northern',
        nameT: 'Pashto, Northern',
        iso3: 'pbu',
        wiki: 'Northern_Pashto',
        names: 'Pakhtoo,Pashtu,Passtoo,Pushto,Pusto,Afghan,Eastern Afghan Pashto,Northwestern Pakhto,Pakhtoon,Pakhtun,Paktu,Pashtoon,Sharqi,Pakhto,Yousafzai Pashto,Yusufzai Pashto',
        hasDetect: true
    });
});
//# sourceMappingURL=pbu.js.map