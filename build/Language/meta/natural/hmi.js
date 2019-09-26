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
        name: 'Miao, Northern Huishui',
        nameT: 'Northern Huishui Hmong',
        iso3: 'hmi',
        wiki: 'Huishui_Miao',
        names: 'Northern Huishui Hmong'
    });
});
//# sourceMappingURL=hmi.js.map