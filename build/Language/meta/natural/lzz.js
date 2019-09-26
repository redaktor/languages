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
        name: 'Laz',
        nameT: 'ლაზური',
        iso3: 'lzz',
        wiki: 'Laz_language',
        OT: 'LAZ',
        names: 'Chan,Chanuri,Chanzan,Laze,Lazuri,Zan'
    });
});
//# sourceMappingURL=lzz.js.map