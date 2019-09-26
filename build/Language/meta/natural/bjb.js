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
        name: 'Banggarla',
        nameT: 'Banggarla',
        iso3: 'bjb',
        wiki: 'Barngarla_language',
        names: 'Bahanga-La,Bangala,Banggala,Banggarla,Bungeha,Bungela,Kortabina,Pakarla,Pangkala,Pankalla,Parnkala,Parnkalla,Punkalla'
    });
});
//# sourceMappingURL=bjb.js.map