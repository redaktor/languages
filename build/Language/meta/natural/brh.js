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
        name: 'Brahui',
        nameT: 'Brahui',
        iso3: 'brh',
        wiki: 'Brahui_language',
        OT: 'BRH',
        names: 'Birahui,Biravi,Brahuiki,Kur Galli,Kurd Gali,Barahui,Brahudi,Brahuidi,Brahuigi'
    });
});
//# sourceMappingURL=brh.js.map