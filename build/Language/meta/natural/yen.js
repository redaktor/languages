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
        name: 'Yendang',
        nameT: 'Yendang',
        iso3: 'yen',
        wiki: 'Yendang_language',
        names: 'Nyandang,Yandang,Yendam,Yundum'
    });
});
//# sourceMappingURL=yen.js.map