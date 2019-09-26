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
        name: 'Sampang',
        nameT: 'Sampang',
        iso3: 'rav',
        wiki: 'Sampang_language',
        names: 'Sampang Gun,Sampang Gung,Sampang Kha,Sampange Rai,Sangpang,Sangpang Gîn,Sangpang Gun,Sangpang Kha'
    });
});
//# sourceMappingURL=rav.js.map