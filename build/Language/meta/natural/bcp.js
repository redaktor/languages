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
        name: 'Bali (Democratic Republic of Congo)',
        nameT: 'Bali (Democratic Republic of Congo)',
        iso3: 'bcp',
        wiki: 'Baali_language',
        names: 'Baali,Dhibali,Kibaali,Kibala,Kibali,Libaali,Southeast Bwa'
    });
});
//# sourceMappingURL=bcp.js.map