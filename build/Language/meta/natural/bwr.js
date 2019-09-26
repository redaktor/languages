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
        name: 'Bura-Pabir',
        nameT: 'Bura-Pabir',
        iso3: 'bwr',
        wiki: 'Bura_language',
        names: 'Babir,Babur,Barburr,Bourrah,Bura,Burra,Huve,Huviya,Kwojeffa,Mya Bura,Pabir'
    });
});
//# sourceMappingURL=bwr.js.map