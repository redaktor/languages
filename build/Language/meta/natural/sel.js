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
        name: 'Selkup',
        nameT: 'шӧльӄумыт',
        iso2: 'sel',
        iso3: 'sel',
        wiki: 'Selkup_language',
        OT: 'SEL',
        names: 'Central Selkups,Chumyl’ Khumyt,Northern Selkups,Ostyak Samoyed,Shöl Khumyt,Shösh Gulla,Syusugulla'
    });
});
//# sourceMappingURL=sel.js.map