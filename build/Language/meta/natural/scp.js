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
        name: 'Helambu Sherpa',
        nameT: 'Helambu Sherpa',
        iso3: 'scp',
        wiki: 'Yolmo_language',
        names: 'Hyolmo,Yholmo,Yohlmo,Yohlmu Tam,Yolmo'
    });
});
//# sourceMappingURL=scp.js.map