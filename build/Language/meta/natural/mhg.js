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
        name: 'Margu',
        nameT: 'Margu',
        iso3: 'mhg',
        wiki: 'Marrgu_language',
        names: 'Ajokoot,Croker,Island Margu,Jaako,Marrgu,Raffles Bay,Terrutong,Terutong,Yaako,Yako'
    });
});
//# sourceMappingURL=mhg.js.map