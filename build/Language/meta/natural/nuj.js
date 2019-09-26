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
        name: 'Nyole',
        nameT: 'Nyole',
        iso3: 'nuj',
        wiki: 'Nyole_language_(Uganda)',
        names: 'Lunyole,Nyule,Nyuli'
    });
});
//# sourceMappingURL=nuj.js.map