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
        name: 'Seraiki',
        nameT: 'Seraiki',
        iso3: 'skr',
        wiki: 'Saraiki_dialect',
        OT: 'SRK',
        names: 'Multani,Mutani,Seraiki,Siraiki,Bahawalpuri',
        hasDetect: true
    });
});
//# sourceMappingURL=skr.js.map