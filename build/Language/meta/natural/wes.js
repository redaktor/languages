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
        name: 'Pidgin, Cameroon',
        nameT: 'Pidgin, Cameroon',
        iso3: 'wes',
        wiki: 'Cameroonian_Pidgin_English',
        names: 'Cameroon Creole English,Wes Cos'
    });
});
//# sourceMappingURL=wes.js.map