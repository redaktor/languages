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
        name: 'Gbe, Eastern Xwla',
        nameT: 'Gbe, Eastern Xwla',
        iso3: 'gbx',
        wiki: 'Phla_language',
        names: 'Houla,Kpla,Offra,Ophra,Phla,Pla,Popo,Xwla'
    });
});
//# sourceMappingURL=gbx.js.map