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
        name: 'Yali, Pass Valley',
        nameT: 'Yali, Pass Valley',
        iso3: 'yac',
        wiki: 'Yali_language',
        names: 'Abendago,North Ngalik,Pass Valley,Western Yali,Yaly'
    });
});
//# sourceMappingURL=yac.js.map