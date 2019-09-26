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
        name: 'Tai Yo',
        nameT: 'Tai Yo',
        iso3: 'tyj',
        wiki: 'Tai_Yo_language',
        names: 'Tai Do,Tai Maen,Tai Man,Tai Men,Tai Mene,Tai Mène,Tai Mènè,Tai-Maen,Tay Muoi,Tay Quy Chau,Tay Yo,Tay-Jo,Thai Muong'
    });
});
//# sourceMappingURL=tyj.js.map