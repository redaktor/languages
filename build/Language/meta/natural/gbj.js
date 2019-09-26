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
        name: 'Gadaba, Bodo',
        nameT: 'Gadaba, Bodo',
        iso3: 'gbj',
        wiki: 'Gutob_language',
        names: 'Boi Gadaba,Gadba,Gadwa,Godwa,Gudwa,Gutob,Gutop'
    });
});
//# sourceMappingURL=gbj.js.map