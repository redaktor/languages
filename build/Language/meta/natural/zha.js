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
        name: 'Zhuang, Northern',
        nameT: 'Cuengh / Tôô / 壮语',
        iso1: 'za',
        iso2: 'zha',
        iso3: 'zha',
        wiki: 'Zhuang_languages',
        hasDetect: true
    });
});
//# sourceMappingURL=zha.js.map