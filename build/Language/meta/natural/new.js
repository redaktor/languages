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
        name: 'Newari',
        nameT: 'नेपाल भाषा',
        iso2: 'new',
        iso3: 'new',
        wiki: 'Newar_language',
        OT: 'NEW',
        names: 'Newa Bhaye,Newaah Bhaae,Newah Bhaaye,Nepal Bhasa,Newaah Bhaaye,Newal Bhaye ("Newari")'
    });
});
//# sourceMappingURL=new.js.map