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
        name: 'Hamer-Banna',
        nameT: 'Hamer-Banna',
        iso3: 'amf',
        wiki: 'Hamer_language',
        OT: 'HBN',
        names: 'Amar,Amarcocche,Amer,Ammar,Bana,Banna,Beshada,Cocche,Hamar,Hamar-Koke,Hamer,Hammer,Hammercoche,Kara Kerre'
    });
});
//# sourceMappingURL=amf.js.map