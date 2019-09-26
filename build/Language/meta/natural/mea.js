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
        name: 'Menka',
        nameT: 'Menka',
        iso3: 'mea',
        wiki: 'Menka_language',
        names: 'Mamwoh,Wando Bando'
    });
});
//# sourceMappingURL=mea.js.map