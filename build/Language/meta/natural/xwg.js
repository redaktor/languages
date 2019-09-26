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
        name: 'Kwegu',
        nameT: 'Kwegu',
        iso3: 'xwg',
        wiki: 'Kwegu_language',
        names: 'Bacha,Koegu,Kwegi,Menja,Nidi'
    });
});
//# sourceMappingURL=xwg.js.map