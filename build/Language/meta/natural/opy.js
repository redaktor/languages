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
        name: 'Ofayé',
        nameT: 'Ofayé',
        iso3: 'opy',
        wiki: 'Ofay%C3%A9_language',
        names: 'Ofaié-Xavante,Ofayé-Xavante,Opaié-Shavante,Opayé'
    });
});
//# sourceMappingURL=opy.js.map