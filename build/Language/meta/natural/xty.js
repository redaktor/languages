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
        name: 'Mixtec, Yoloxochitl',
        nameT: 'Mixtec, Yoloxochitl',
        iso3: 'xty',
        wiki: 'Yolox%C3%B3chitl_Mixtec',
        names: 'Mixteco de Yoloxóchitl,Tu’un savi'
    });
});
//# sourceMappingURL=xty.js.map