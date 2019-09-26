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
        name: 'Miao, Central Huishui',
        nameT: 'Central Huishui Hmong',
        iso3: 'hmc',
        wiki: 'Huishui_Miao',
        names: 'Central Huishui Hmong'
    });
});
//# sourceMappingURL=hmc.js.map