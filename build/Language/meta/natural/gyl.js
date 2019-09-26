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
        name: 'Gayil',
        nameT: 'Gayil',
        iso3: 'gyl',
        wiki: 'Gayil_language',
        names: 'Galila,Gayi,Gayl,Gelila,Northern Ari'
    });
});
//# sourceMappingURL=gyl.js.map