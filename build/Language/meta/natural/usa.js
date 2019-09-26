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
        name: 'Usarufa',
        nameT: 'Usarufa',
        iso3: 'usa',
        wiki: 'Usarufa_language',
        names: 'Usurufa,Uturupa'
    });
});
//# sourceMappingURL=usa.js.map