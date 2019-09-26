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
        name: 'Samo, Maya',
        nameT: 'Samo, Maya',
        iso3: 'sym',
        wiki: 'Samo_language_(Burkina)',
        names: 'Northeastern Samo,Sa,San'
    });
});
//# sourceMappingURL=sym.js.map