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
        name: 'Fataluku',
        nameT: 'Fataluku',
        iso3: 'ddg',
        wiki: 'Fataluku_language',
        names: 'Dagada,Dagaga,Dagoda’'
    });
});
//# sourceMappingURL=ddg.js.map