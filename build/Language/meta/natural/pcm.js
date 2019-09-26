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
        name: 'Pidgin, Nigerian',
        nameT: 'Pidgin, Nigerian',
        iso3: 'pcm',
        wiki: 'Nigerian_Pidgin',
        names: 'Anglo-Nigerian Pidgin,Broken English,Brokin,Brokun,Nigerian Creole English,Nigerian Pidgin English',
        hasDetect: true
    });
});
//# sourceMappingURL=pcm.js.map