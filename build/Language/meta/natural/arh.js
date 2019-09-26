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
        name: 'Arhuaco',
        nameT: 'Arhuaco',
        iso3: 'arh',
        wiki: 'Arhuaco_language',
        names: 'Arauco,Arhuac,Aruac,Aruaco,Auroguac,Bintucua,Bintuk,Bíntuka,Bíntukua,Bítuncua,Ica,Ijca,Ijka,Ika,Ikan,Ike,Iku'
    });
});
//# sourceMappingURL=arh.js.map