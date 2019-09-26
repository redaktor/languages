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
        name: 'Ngas',
        nameT: 'Ngas',
        iso3: 'anc',
        wiki: 'Ngas_language',
        names: 'Angas,Karang,Kerang'
    });
});
//# sourceMappingURL=anc.js.map