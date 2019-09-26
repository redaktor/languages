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
        name: 'Nuu-chah-nulth',
        nameT: 'Nuu-chah-nulth',
        iso3: 'nuk',
        wiki: 'Nuu-chah-nulth_language',
        names: 'Aht,Nootka,Nootkans,Nutka,Nuučaan’ul,Quuquu’aca,T’aat’aaqsapa,West Coast'
    });
});
//# sourceMappingURL=nuk.js.map