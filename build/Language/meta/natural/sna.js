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
        name: 'Shona',
        nameT: 'chiShona',
        iso1: 'sn',
        iso2: 'sna',
        iso3: 'sna',
        wiki: 'Shona_language',
        names: 'Shona,Chishona,Zezuru ("Swina")',
        hasDetect: true
    });
});
//# sourceMappingURL=sna.js.map