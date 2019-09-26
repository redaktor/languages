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
        name: 'Sikaritai',
        nameT: 'Sikaritai',
        iso3: 'tty',
        wiki: 'Sikaritai_language',
        names: 'Aikwakai,Araikurioko,Ati,Sikari,Tori,Tori Aikwakai'
    });
});
//# sourceMappingURL=tty.js.map