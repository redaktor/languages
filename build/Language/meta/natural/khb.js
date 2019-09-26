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
        name: 'Lü',
        nameT: 'Lü',
        iso3: 'khb',
        wiki: 'Tai_L%C3%BC_language',
        OT: 'XBD',
        names: 'Dai,Dai Le,Lu,Lue,Ly,Pai’i’,Pai-I,Shui-Pai-I,Sipsongpanna Dai,Tai Lu,Xishuangbanna Dai,Shu-Ai-I,Pai-Yi,Tai Lue,Thai Lu,Duon,Nhuon'
    });
});
//# sourceMappingURL=khb.js.map