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
        name: 'Ngulu',
        nameT: 'Ngulu',
        iso3: 'ngp',
        wiki: 'Ngulu_language',
        names: 'Geja,Kingulu,Nguru,Nguu,Wayomba'
    });
});
//# sourceMappingURL=ngp.js.map