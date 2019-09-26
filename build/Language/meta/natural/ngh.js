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
        name: 'Nǀu',
        nameT: 'Nǀu',
        iso3: 'ngh',
        wiki: 'N%C7%81ng_language',
        names: '‡Khomani,N||ng,N|huuki,N|uu,N|uuki,Nghuki,Ng’uki'
    });
});
//# sourceMappingURL=ngh.js.map