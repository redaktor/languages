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
        name: 'Mundari',
        nameT: 'Mundari',
        iso3: 'unr',
        wiki: 'Mundari_language',
        OT: 'MUN',
        names: 'Colh,Horo,Mandari,Mondari,Munari,Munda,Kolh,Santhali,Satar'
    });
});
//# sourceMappingURL=unr.js.map