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
        name: 'O’du',
        nameT: 'O’du',
        iso3: 'tyh',
        wiki: 'O%E2%80%99du_language',
        names: '’Iduh,O Du,Oedou,Haat,Hat ("Haat","Hat","Tay Hat")'
    });
});
//# sourceMappingURL=tyh.js.map