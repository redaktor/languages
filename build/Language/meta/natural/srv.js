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
        name: 'Sorsoganon, Southern',
        nameT: 'Sorsoganon, Southern',
        iso3: 'srv',
        wiki: 'Sorsoganon_language',
        names: 'Bikol Sorsogon,Gubat,Sorsogon,Waray,Southern Sorsogon'
    });
});
//# sourceMappingURL=srv.js.map