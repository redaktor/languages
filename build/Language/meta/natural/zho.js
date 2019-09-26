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
        name: 'Chinese',
        nameT: '中文',
        iso1: 'zh',
        iso2: 'chi',
        iso2T: 'zho',
        iso3: 'zho',
        wiki: 'Chinese_language',
        OT: 'sZHH, ZHP, ZHS, ZHT',
        hasDetect: true
    });
});
//# sourceMappingURL=zho.js.map