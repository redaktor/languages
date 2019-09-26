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
        name: 'Cia-Cia',
        nameT: 'Cia-Cia',
        iso3: 'cia',
        wiki: 'Cia-Cia_language',
        names: 'Boetoneezen,Buton,Butonese,Butung,South Buton,Southern Butung'
    });
});
//# sourceMappingURL=cia.js.map