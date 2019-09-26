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
        name: 'Bantawa',
        nameT: 'Bantawa',
        iso3: 'bap',
        wiki: 'Bantawa_language',
        names: 'An Yüng,Bantaba,Bantawa Dum,Bantawa Rai,Bantawa Yong,Bantawa Yüng,Bontawa,Kirat Khambu,Kirat Khambu Rai,Kirawa Yüng,Rai'
    });
});
//# sourceMappingURL=bap.js.map