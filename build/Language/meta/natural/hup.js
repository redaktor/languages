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
        name: 'Hupa',
        nameT: 'Hoopa',
        iso2: 'hup',
        iso3: 'hup',
        wiki: 'Hupa_language',
        names: 'Hoopa'
    });
});
//# sourceMappingURL=hup.js.map