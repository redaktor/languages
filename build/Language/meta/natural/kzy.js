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
        name: 'Kango (Tshopo District)',
        nameT: 'Kango (Tshopo District)',
        iso3: 'kzy',
        wiki: 'Bila_language',
        names: 'Dikango,Kango Pygmy,Kikango,Likango ("Dibatchua","Kibatchua")'
    });
});
//# sourceMappingURL=kzy.js.map