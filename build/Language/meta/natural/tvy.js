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
        name: 'Pidgin, Timor',
        nameT: 'Pidgin, Timor',
        iso3: 'tvy',
        wiki: 'Bidau_Creole_Portuguese',
        names: 'Bidau Creole Portuguese,Português de Bidau,Timor Creole Portuguese'
    });
});
//# sourceMappingURL=tvy.js.map