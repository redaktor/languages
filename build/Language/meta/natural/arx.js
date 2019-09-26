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
        name: 'Aruá (Rodonia State)',
        nameT: 'Aruá (Rodonia State)',
        iso3: 'arx',
        wiki: 'Aru%C3%A1shi_language',
        names: 'Arouá,Arouén'
    });
});
//# sourceMappingURL=arx.js.map