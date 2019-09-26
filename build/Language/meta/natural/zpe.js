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
        name: 'Zapotec, Petapa',
        nameT: 'Zapoteco de Santa María Petapa',
        iso3: 'zpe',
        wiki: 'Petapa_Zapotec',
        names: 'Zapoteco de Santa María Petapa'
    });
});
//# sourceMappingURL=zpe.js.map