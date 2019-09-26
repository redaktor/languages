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
        name: 'Tai Pao',
        nameT: 'Tai Pao',
        iso3: 'tpo',
        wiki: 'Tai_Pao_language',
        names: 'Hàng Tong,Tai Hang Tong,Tai Paw,Tày Muòng,Thai Muong'
    });
});
//# sourceMappingURL=tpo.js.map