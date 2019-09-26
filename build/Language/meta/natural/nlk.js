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
        name: 'Yali, Ninia',
        nameT: 'Yali, Ninia',
        iso3: 'nlk',
        wiki: 'Yali_language',
        names: 'Jalè,Jaly,Ninia,North Ngalik,Southern Yali,Yali Selatan'
    });
});
//# sourceMappingURL=nlk.js.map