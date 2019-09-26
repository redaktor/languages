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
        name: 'Tai Daeng',
        nameT: 'Tai Daeng',
        iso3: 'tyr',
        wiki: 'Tai_Daeng_language',
        names: 'Daeng,Red Thai,Tai Deng,Thai Dang,Thai Do,Môc-Châu,Red Tai,Tai Rouge,Táy-Môc-Châu'
    });
});
//# sourceMappingURL=tyr.js.map