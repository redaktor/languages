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
        name: 'Sebat Bet Gurage',
        nameT: 'Sebat Bet Gurage',
        iso3: 'sgw',
        wiki: 'Sebat_Bet_Gurage_language',
        OT: 'CHG',
        names: 'Central West Gurage,Gouraghie,Gurage,Guragie,Gurague,West Gurage'
    });
});
//# sourceMappingURL=sgw.js.map