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
        name: 'Romani, Vlax',
        nameT: 'Romani, Vlax',
        iso3: 'rmy',
        wiki: 'Vlax_Romani_language',
        names: 'Rom,Danubian,Gypsy,Tsigene,Vlax,Romanés,Tsingani,Roma,Romanese,Vlax Romany,Kalderash ("Zigenare")',
        hasDetect: true
    });
});
//# sourceMappingURL=rmy.js.map