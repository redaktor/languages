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
        name: 'Icelandic Sign Language',
        nameT: 'Icelandic Sign Language',
        iso3: 'icl',
        wiki: 'Icelandic_Sign_Language',
        names: 'Íslenskt Táknmál,ITM'
    });
});
//# sourceMappingURL=icl.js.map