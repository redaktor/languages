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
        name: 'Buyang, E’ma',
        nameT: 'Buozaang',
        iso3: 'yzg',
        wiki: 'Buyang_language',
        names: 'Buyang Zhuang,Eastern Buyang,Funing Buyang,Langjia Buyang'
    });
});
//# sourceMappingURL=yzg.js.map