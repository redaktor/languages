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
        name: 'Totonac, Western',
        nameT: 'Totonac, Western',
        iso3: 'tqt',
        wiki: 'Ozomatl%C3%A1n_Totonac',
        names: 'Totonac,Ozumatlán,Totonac,Xinolatépetl,Totonaco de Ozomatlán,Totonaco Norte de Huauchinango,Western Totonac,Xinolatépetl Totonac,Xinulajgsípij Totonaco'
    });
});
//# sourceMappingURL=tqt.js.map