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
        name: 'Alagwa',
        nameT: 'Alagwa',
        iso3: 'wbj',
        wiki: 'Alagwa_language',
        names: 'Alagwaisa,Alagwase,Alawa,Asi,Chasi,Hhagiree,Kialagwa,Kichase,Uassi,Waasi,Wasi'
    });
});
//# sourceMappingURL=wbj.js.map