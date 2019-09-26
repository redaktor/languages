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
        name: 'Wolaitta',
        nameT: 'Wolaitta',
        iso2: 'wal',
        iso3: 'wal',
        wiki: 'Wolaytta_language',
        names: 'Borodda,Ometo,Ualamo,Uba,Uollamo,Wallamo,Welamo,Wellamo,Wolaita,Wolataita,Wolayta,Wollamo ("Walamo")',
        hasDetect: true
    });
});
//# sourceMappingURL=wal.js.map