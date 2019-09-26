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
        name: 'Lohar, Gade',
        nameT: 'Lohar, Gade',
        iso3: 'gda',
        wiki: 'Loarki_language',
        names: 'Bagri Lohar,Belani,Bhubaliya Lohar,Chitodi Lohar,Chittoriya Lohar,Dhunkuria,Domba,Dombiali,Gadia Lohar,Gaduliya Lohar,Gara,Kanwar Khati,Lohari,Lohpitta,Panchal Lohar,Rajput Lohar'
    });
});
//# sourceMappingURL=gda.js.map