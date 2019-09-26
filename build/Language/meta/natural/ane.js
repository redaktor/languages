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
        name: 'Xârâcùù',
        nameT: 'Xârâcùù',
        iso3: 'ane',
        wiki: 'X%C3%A2r%C3%A2c%C3%B9%C3%B9',
        names: 'Anesu,Canala,Haraneu,Kanala,Naa Xaracuu,Xaracii'
    });
});
//# sourceMappingURL=ane.js.map