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
        name: 'Kalispel-Pend d\'Oreille',
        nameT: 'Kalispel-Pend d\'Oreille',
        iso3: 'fla',
        wiki: 'Salish-Spokane-Kalispel_language',
        names: 'Nqlispélišcn,Salish ("Flathead-Kalispel","Kalispel-Flathead")'
    });
});
//# sourceMappingURL=fla.js.map