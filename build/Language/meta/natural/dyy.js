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
        name: 'Dyaabugay',
        nameT: 'Dyaabugay',
        iso3: 'dyy',
        wiki: 'Djabugay_language',
        names: 'Bulum-Bulum,Check-Cull,Chewlie,Djabugai,Dyabugay,Hileman,Kikonjunkulu,Kodgotto,Kokonyungalo,Koko-Tjumbundji,Ngarlkajie,Orlow,Tjabakai-Thandji,Tjabogaijanji,Tjankir,Tjankun,Tjapukai,Tjapunkandji,Tjunbundji'
    });
});
//# sourceMappingURL=dyy.js.map