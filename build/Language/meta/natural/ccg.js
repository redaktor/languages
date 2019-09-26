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
        name: 'Daka, Samba',
        nameT: 'Daka, Samba',
        iso3: 'ccg',
        wiki: 'Daka_language',
        names: 'Chamba,Chamba Daka,Daka,Dakka,Dekka,Deng,Jama,Nakanyare,Naken,Nyare,Sama,Samba,Tchamba,Tikk,Tsamba'
    });
});
//# sourceMappingURL=ccg.js.map