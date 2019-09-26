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
        name: 'Yagwoia',
        nameT: 'Yagwoia',
        iso3: 'ygw',
        wiki: 'Yagwoia_language',
        names: 'Gwase,Hiqwase,Hiqwaye,Iwalaqamalhe,Kokwaiyakwa,Yeghuye,Yeqwangilje'
    });
});
//# sourceMappingURL=ygw.js.map