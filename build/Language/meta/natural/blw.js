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
        name: 'Balangao',
        nameT: 'Balangao',
        iso3: 'blw',
        wiki: 'Balangao_language',
        names: 'Balangao Bontoc,Balangaw,Farangao'
    });
});
//# sourceMappingURL=blw.js.map