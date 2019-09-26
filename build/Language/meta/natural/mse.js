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
        name: 'Musey',
        nameT: 'Musey',
        iso3: 'mse',
        wiki: 'Musey_language',
        names: 'Bananna,Bananna Ho,Ho,Mosi,Moussei,Moussey,Musaya,Musei,Museyna,Musiina,Musoi,Mussoi,Mussoy,Bananna Ho Ho'
    });
});
//# sourceMappingURL=mse.js.map