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
        name: 'Dani, Mid Grand Valley',
        nameT: 'Dani, Mid Grand Valley',
        iso3: 'dnt',
        wiki: 'Grand_Valley_Dani_language',
        names: 'Baliem Valley Dani,Central Grand Valley Dani,Tulem'
    });
});
//# sourceMappingURL=dnt.js.map