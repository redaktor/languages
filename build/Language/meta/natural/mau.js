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
        name: 'Mazatec, Huautla',
        nameT: 'Mazatec, Huautla',
        iso3: 'mau',
        wiki: 'Mazatecan_languages',
        names: 'Enna,Highland Mazatec,Mazateco de Huautla de Jimenez,Mazateco de la Sierra,Mazateco del Centro'
    });
});
//# sourceMappingURL=mau.js.map