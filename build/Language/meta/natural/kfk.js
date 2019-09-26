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
        name: 'Kinnauri',
        nameT: 'Kinnauri',
        iso3: 'kfk',
        wiki: 'Kinnauri_language',
        names: 'Kanauri,Kanaury Anuskad,Kanawari,Kanawi,Kanoreunu Skad,Kanorin Skad,Kanorug Skadd,Kinnaura Yanuskad,Kinner,Kinori,Koonawure,Kunawari,Kunawur,Lower Kinnauri,Malhesti,Milchan,Milchanang,Milchang,Tibas Skad'
    });
});
//# sourceMappingURL=kfk.js.map