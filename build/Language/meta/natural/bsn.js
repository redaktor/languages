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
        name: 'Eduria-Barasana',
        nameT: 'Eduria-Barasana',
        iso3: 'bsn',
        wiki: 'Barasana-Eduria_language',
        names: 'Banera yae,Barasana,Barasano,Come masa,Comematsa,Edulia,Eduria,Hanera oka,Janera,Paneroa,Southern Barasano,Taibano,Taiwaeno,Taiwano',
        hasDetect: true
    });
});
//# sourceMappingURL=bsn.js.map