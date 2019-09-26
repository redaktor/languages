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
        name: 'Folopa',
        nameT: 'Folopa',
        iso3: 'ppo',
        wiki: 'Folopa_language',
        names: 'Foraba,Podoba,Podopa,Polopa'
    });
});
//# sourceMappingURL=ppo.js.map