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
        name: 'Belanda Viri',
        nameT: 'Belanda Viri',
        iso3: 'bvi',
        wiki: 'Belanda_Viri_language',
        names: 'Belanda,Biri,Bviri,Gamba,Gumba,Mbegumba,Mvegumba,Viri'
    });
});
//# sourceMappingURL=bvi.js.map