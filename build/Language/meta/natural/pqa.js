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
        name: 'Pa’a',
        nameT: 'Pa’a',
        iso3: 'pqa',
        wiki: 'Pa%27a_language',
        names: 'Afa,Afanci,Afawa,Fa’awa,Foni,Fucaka,Pa’anci,Pa’awa,Pala'
    });
});
//# sourceMappingURL=pqa.js.map