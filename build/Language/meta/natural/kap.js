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
        name: 'Bezhta',
        nameT: 'Бежкьа',
        iso3: 'kap',
        wiki: 'Bezhta_language',
        names: 'Bezht’alas mits,Bazht’,Bazht’al,Bechitin,Bexita,Bezheta,Bezhita,Bezhituri,Bezhti,Kapuch,Kapucha,Kapuchin,Kapuchin-Gunzib,Kapuchuri,Khvanal,Kiburabi,Kupuca'
    });
});
//# sourceMappingURL=kap.js.map