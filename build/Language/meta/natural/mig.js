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
        name: 'Mixtec, San Miguel El Grande',
        nameT: 'Mixtec, San Miguel El Grande',
        iso3: 'mig',
        wiki: 'Atatl%C3%A1huca%E2%80%93San_Miguel_Mixtec',
        names: 'Chalcatongo Mixtec,Mixteco de San Pedro Molinos,Mixteco del Sur Bajo'
    });
});
//# sourceMappingURL=mig.js.map