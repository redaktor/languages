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
        name: 'Daju, Dar Sila',
        nameT: 'Daju, Dar Sila',
        iso3: 'dau',
        wiki: 'Sila_language_(Chad)',
        names: 'Bokor,Bokorike,Bokoruge,Mongo-Sila,Sila,Sula,Dadjo,Dajou,Daju'
    });
});
//# sourceMappingURL=dau.js.map