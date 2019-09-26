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
        name: 'Papel',
        nameT: 'Papel',
        iso3: 'pbo',
        wiki: 'Papel_language',
        names: 'Moium,Oium,Papei,Pepel'
    });
});
//# sourceMappingURL=pbo.js.map