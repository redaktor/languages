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
        name: 'Tuva',
        nameT: 'Tuva',
        iso2: 'tyv',
        iso3: 'tyv',
        wiki: 'Tuvan_language',
        OT: 'TUV',
        names: 'Diba,Kök Mungak,Tuvin,Tuwa,Soyod,Soyon,Soyot,Tannu-Tuva,Tuba,Tuvan,Tuva-Uriankhai,Tuvia,Tuvinian,Tuwa-Uriankhai,Uriankhai,Uryankhai-Monchak,Tofa,Tokha,Tyva,Uriankhai-Monchak,Uryankhai',
        hasDetect: true
    });
});
//# sourceMappingURL=tyv.js.map