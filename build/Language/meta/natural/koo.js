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
        name: 'Konjo',
        nameT: 'Konjo',
        iso3: 'koo',
        wiki: 'Konjo_language_(Bantu)',
        names: 'Bayira,Lhukonzo,Olukonjo,Olukonzo,Rukonjo',
        hasDetect: true
    });
});
//# sourceMappingURL=koo.js.map