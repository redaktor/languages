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
        name: 'Yaneshaʼ',
        nameT: 'Yaneshaʼ',
        iso3: 'ame',
        wiki: 'Yanesha%27_language',
        names: 'Amagé,Amagues,Amajé,Amajó,Amoishe,Amueixa,Amuese,Amuesha,Amueshua,Amuetamo,Lorenzo,Omagé',
        hasDetect: true
    });
});
//# sourceMappingURL=ame.js.map