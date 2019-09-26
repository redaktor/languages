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
        name: 'Dzao Min',
        nameT: 'Dzao Min',
        iso3: 'bpn',
        wiki: 'Dzao_Min_language',
        names: 'Ba Pai Yao,dzau min,Yao Min,Yau Min,Zaomin'
    });
});
//# sourceMappingURL=bpn.js.map