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
        name: 'Monpa, Tawang',
        nameT: 'Monpa, Tawang',
        iso3: 'twm',
        wiki: 'Takpa_language',
        names: 'Buruomiba,Cona Monba,Cuona Menba,Cuona Monpa,Dakpa,Dwags,Menba,Menpa,Moinba,Momba,Mompa,Monba,Monpa,Pramipa,Takpa,Tawan Monba,Brahmi,Monkit,Northern Monpa'
    });
});
//# sourceMappingURL=twm.js.map