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
        name: 'Makaa',
        nameT: 'Makaa',
        iso3: 'mcp',
        wiki: 'Makaa_language',
        names: 'Mekaa,South Makaa,South Mekaa'
    });
});
//# sourceMappingURL=mcp.js.map