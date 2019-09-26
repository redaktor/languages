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
        name: 'Haitian Creole French (Kreyol)',
        nameT: 'Krèyol ayisyen',
        iso1: 'ht',
        iso2: 'hat',
        iso3: 'hat',
        wiki: 'Haitian_Creole',
        OT: 'HAI',
        names: 'Aiysyen,Creole,Haitian,Kreyol,Kreyòl,Kreyòl ayisyen,Western Caribbean Creole',
        hasDetect: true
    });
});
//# sourceMappingURL=hat.js.map