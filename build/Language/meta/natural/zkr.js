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
        name: 'Zakhring',
        nameT: 'Zakhring',
        iso3: 'zkr',
        wiki: 'Zakhring_language',
        names: 'Charumba,Zaiwa,Zha,Eastern Mishmi,Meyor'
    });
});
//# sourceMappingURL=zkr.js.map