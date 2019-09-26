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
        name: 'Tai Mène',
        nameT: 'Tai Mène',
        iso3: 'tmp',
        wiki: 'Tai_Yo_language',
        names: 'Tai Maen,Tai Man,Tai Men,Tai Mene,Tai-Maen,Tay Mènè'
    });
});
//# sourceMappingURL=tmp.js.map