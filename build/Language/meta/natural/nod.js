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
        name: 'Thai, Northern',
        nameT: 'ล้านนา',
        iso3: 'nod',
        wiki: 'Northern_Thai_language',
        OT: 'NTA',
        names: 'Kam Mueang,Lan Na,Lanatai,Lanna,Lannatai,Muang,Mueang,Myang,Kam Mu’ang,Kammüang,Kammyang,Khon,Khon Meang,Khon Myang,Khonmuang,La Nya,Mu’ang,Mung,Northern Thai,Payap,Phayap,Phyap,Tai Nya,Tai Yon,Tai Yuan,Western Laotian ("Youanne","Youon","Yuan")'
    });
});
//# sourceMappingURL=nod.js.map