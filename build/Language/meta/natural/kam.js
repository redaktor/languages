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
        name: 'Kamba (Kenya)',
        nameT: 'Kamba (Kenya)',
        iso2: 'kam',
        iso3: 'kam',
        wiki: 'Kamba_language',
        OT: 'KMB',
        names: 'Akamba,Kekamba,Kikamba'
    });
});
//# sourceMappingURL=kam.js.map