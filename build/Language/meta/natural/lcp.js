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
        name: 'Lawa, Western',
        nameT: 'Lawa, Western',
        iso3: 'lcp',
        wiki: 'Lawa_language',
        names: 'Lava,Lavua,Lavüa,Luwa,L’wa,Mae Hong Son Lawa,Mountain Lawa,Omphai Lawa ("Lua")'
    });
});
//# sourceMappingURL=lcp.js.map