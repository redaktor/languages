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
        name: 'Pulaar',
        nameT: 'Pulaar',
        iso3: 'fuc',
        wiki: 'Pulaar_language',
        names: 'Fulani,Fulbe Jeeri,Fulfulde-Pulaar,Peul,Peulh,Pulaar Fulfulde,Fulfulde Pulaar,Haalpulaar,Peuhl',
        hasDetect: true
    });
});
//# sourceMappingURL=fuc.js.map