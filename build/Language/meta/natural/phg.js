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
        name: 'Phuong',
        nameT: 'Phuong',
        iso3: 'phg',
        wiki: 'Phuong_language',
        names: 'Phuang,Phuong Catang'
    });
});
//# sourceMappingURL=phg.js.map