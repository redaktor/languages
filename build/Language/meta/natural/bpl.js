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
        name: 'Broome Pearling Lugger Pidgin',
        nameT: 'Broome Pearling Lugger Pidgin',
        iso3: 'bpl',
        wiki: 'Broome_Pearling_Lugger_Pidgin',
        names: 'Broom Creole,Japanese Pidgin English,Koepang Talk,Malay Talk'
    });
});
//# sourceMappingURL=bpl.js.map