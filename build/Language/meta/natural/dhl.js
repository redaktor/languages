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
        name: 'Dhalandji',
        nameT: 'Dhalandji',
        iso3: 'dhl',
        wiki: 'Dhalandji_language',
        names: 'Dalandji,Dalendi,Djalendi,Talaindji,Talandi,Talandji,Talangee,Tallainga,Taloinga,Thalantji,Thalanyji'
    });
});
//# sourceMappingURL=dhl.js.map