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
        name: 'Guahibo',
        nameT: 'Guahibo',
        iso3: 'guh',
        wiki: 'Guahibo_language',
        names: 'Goahibo,Goahiva,Guaigua,Guajibo,Guayba,Hivi,Wahibo,Hiwi,Jiwi,Sikuani ("Sicuani","Sikuani")',
        hasDetect: true
    });
});
//# sourceMappingURL=guh.js.map