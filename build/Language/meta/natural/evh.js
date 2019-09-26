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
        name: 'Uvbie',
        nameT: 'Uvbie',
        iso3: 'evh',
        wiki: 'Uvbie_language',
        names: 'Effurun,Evrie,Uvhria,Uvwie ("Evhro")'
    });
});
//# sourceMappingURL=evh.js.map