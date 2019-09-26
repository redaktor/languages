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
        name: 'Kxoe',
        nameT: 'Kxoe',
        iso3: 'xuu',
        wiki: 'Khwe_language',
        names: '!Hukwe,Black Bushman,Cazama,Glanda-Khwe,Hukwe,Kxoe,Kxoedam,Schekere,Vazama,Water Bushmen,Xu,Xuhwe,Xun,Zama,Basarwa,Khoe,Khwe-||Ani,Mbara Kwengo,Mbarakwena ("Mbarakwena","Mbarakwengo","Water Bushmen","Barakwena","Barakwengo")'
    });
});
//# sourceMappingURL=xuu.js.map