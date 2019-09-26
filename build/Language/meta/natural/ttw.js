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
        name: 'Long Wat',
        nameT: 'Long Wat',
        iso3: 'ttw',
        wiki: 'Tutoh_language',
        names: 'Tutoh Kenya,Tutoh Kenyah'
    });
});
//# sourceMappingURL=ttw.js.map