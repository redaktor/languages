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
        name: 'Riang (Myanmar)',
        nameT: 'Riang (Myanmar)',
        iso3: 'ril',
        wiki: 'Riang_language',
        names: 'Riang,Black Karen,Black Riang,Black Yang,Drum,Yang,Yang Lang,Yang Wan Kun,Yanglam,Yin,Yin Net,Yinnet'
    });
});
//# sourceMappingURL=ril.js.map