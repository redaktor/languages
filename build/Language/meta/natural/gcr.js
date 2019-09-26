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
        name: 'Creole French, Guianese',
        nameT: 'Creole French, Guianese',
        iso3: 'gcr',
        wiki: 'Guianan_Cr%C3%A9ole',
        names: 'French Guianese Creole French,Guyanais,Guyane,Guyane Creole,Patois,Patwa'
    });
});
//# sourceMappingURL=gcr.js.map