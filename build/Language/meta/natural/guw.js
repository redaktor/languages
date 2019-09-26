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
        name: 'Gun',
        nameT: 'Gun',
        iso3: 'guw',
        wiki: 'Fon_language',
        names: 'Alada,Alada-Gbe,Egun,Goun,Gu,Gugbe,Gun-Alada,Gungbe,Gun-Gbe,Seto-Gbe,Toli-Gbe'
    });
});
//# sourceMappingURL=guw.js.map