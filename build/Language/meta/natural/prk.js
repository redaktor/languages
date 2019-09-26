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
        name: 'Wa',
        nameT: 'Wa',
        iso3: 'prk',
        wiki: 'Wa_language',
        names: 'Baraog,Baroke,Buliu,Bulu,Burao,Phalok,Praok,Standard Wa',
        hasDetect: true
    });
});
//# sourceMappingURL=prk.js.map