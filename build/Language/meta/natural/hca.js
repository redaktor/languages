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
        name: 'Creole Hindi, Andaman',
        nameT: 'Andaman Hindi',
        iso3: 'hca',
        wiki: 'Andaman_Creole_Hindi',
        names: 'Andaman Hindi'
    });
});
//# sourceMappingURL=hca.js.map