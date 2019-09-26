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
        name: 'Mburku',
        nameT: 'Mburku',
        iso3: 'bbt',
        wiki: 'Mburku_language',
        names: 'Barke,Barko,Burkanawa,Kariya,Lipkawa,Mburkanci,Wudufu,Wuufu'
    });
});
//# sourceMappingURL=bbt.js.map