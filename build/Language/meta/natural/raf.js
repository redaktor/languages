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
        name: 'Meohang, Western',
        nameT: 'Meohang, Western',
        iso3: 'raf',
        wiki: 'Mewahang_language',
        names: 'Mewahang,Newahang,Newahang Jimi,Newang,Newange Rai,Western Meohang'
    });
});
//# sourceMappingURL=raf.js.map