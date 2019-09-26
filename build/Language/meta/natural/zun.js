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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zuni',
        nameT: 'Zuni',
        iso2: 'zun',
        iso3: 'zun',
        wiki: 'Zuni_language',
        names: 'Shiwi’ma,Zuñi'
    });
});
//# sourceMappingURL=zun.js.map