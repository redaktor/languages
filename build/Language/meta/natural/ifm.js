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
        name: 'Teke-Fuumu',
        nameT: 'Teke-Fuumu',
        iso3: 'ifm',
        wiki: 'Fuumu_language',
        names: 'Fumu,Fuumu,Kiteke,South Central Teke,Teke du Pool'
    });
});
//# sourceMappingURL=ifm.js.map