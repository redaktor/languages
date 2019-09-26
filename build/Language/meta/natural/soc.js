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
        name: 'So (Democratic Republic of Congo)',
        nameT: 'So (Democratic Republic of Congo)',
        iso3: 'soc',
        wiki: 'Soko_language',
        names: 'Eso,Gesogo,Heso,Soa,Soko'
    });
});
//# sourceMappingURL=soc.js.map