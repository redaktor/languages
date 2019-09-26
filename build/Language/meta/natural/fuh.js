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
        name: 'Fulfulde, Western Niger',
        nameT: 'Fulfulde, Western Niger',
        iso3: 'fuh',
        wiki: 'Fula_language',
        names: 'Fulfulde,Peul,Peulh,Western Niger Fulfulde,Fula,Fulani,Fulbe,Gorgal Fulfulde,Northeastern Burkina Faso Fulfulde'
    });
});
//# sourceMappingURL=fuh.js.map