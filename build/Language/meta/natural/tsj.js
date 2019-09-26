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
        name: 'Tshangla',
        nameT: 'Tshangla',
        iso3: 'tsj',
        wiki: 'Tshangla_language',
        names: 'Menba,Monpa,Sangla,Sarchapkkha,Shachobiikha,Shachopkha,Sharchagpakha,Sharchhokpa,Tsangla,Tshalingpa,Canglo Monba,Cangluo Menba,Cangluo Monba,Central Monpa,Monba,Motuo Menba,Tsangla Monba,Tsanglo,Dirang,Memba,Motuo,Sharchopkha'
    });
});
//# sourceMappingURL=tsj.js.map