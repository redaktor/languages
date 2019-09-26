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
        name: 'Aukaans',
        nameT: 'Aukaans',
        iso3: 'djk',
        wiki: 'Ndyuka_language',
        names: 'Businenge Tongo,Businengee Tongo,Eastern Maroon Creole,Ndyuka,Nenge,Nenge Tongo,Nengee,Nengee Tongo,Ndjuká,Njuká,Okanisi ("Taki-Taki","Djoeka","Djuka")',
        hasDetect: true
    });
});
//# sourceMappingURL=djk.js.map