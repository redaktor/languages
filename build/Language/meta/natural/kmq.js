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
        name: 'Kwama',
        nameT: 'Kwama',
        iso3: 'kmq',
        wiki: 'Kwama_language',
        names: 'Afan Mao,Amam,Gogwama,Goma,Gwama,Koma of Asosa,Nokanoka,North Koma,Takwama,T’wa Kwama'
    });
});
//# sourceMappingURL=kmq.js.map