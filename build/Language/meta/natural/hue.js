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
        name: 'Huave, San Francisco Del Mar',
        nameT: 'Huave, San Francisco Del Mar',
        iso3: 'hue',
        wiki: 'Huave_language',
        names: 'Huave del Este,Ombeyajts'
    });
});
//# sourceMappingURL=hue.js.map