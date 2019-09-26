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
        name: 'Ngando (Central African Republic)',
        nameT: 'Ngando (Central African Republic)',
        iso3: 'ngd',
        wiki: 'Ngando_language_(Central_African_Republic)',
        names: 'Bagandou,Bangandou,Bodzanga,Dingando,Ngando-Kota'
    });
});
//# sourceMappingURL=ngd.js.map