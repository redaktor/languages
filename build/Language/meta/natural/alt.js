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
        name: 'Altai, Southern',
        nameT: 'Altai, Southern',
        iso2: 'alt',
        iso3: 'alt',
        wiki: 'Altai_language',
        OT: 'ALT',
        names: 'Altai,Oirot,Oyrot',
        hasDetect: true
    });
});
//# sourceMappingURL=alt.js.map