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
        name: 'Rapanui',
        nameT: 'rapanui',
        iso2: 'rap',
        iso3: 'rap',
        wiki: 'Rapa_Nui_language',
        names: 'Easter Island,Rapanui'
    });
});
//# sourceMappingURL=rap.js.map