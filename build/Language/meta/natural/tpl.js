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
        name: 'Me’phaa, Tlacoapa',
        nameT: 'Mi’phaa',
        iso3: 'tpl',
        wiki: 'Tlapanec_language',
        names: 'Me’phaa,Me’phaa de Tlacoapa,Mi’phàà Mí’uíí,Tlacoapa Tlapanec,Tlapaneco,Tlapaneco de Tlacoapa,Tlapaneco del Centro'
    });
});
//# sourceMappingURL=tpl.js.map