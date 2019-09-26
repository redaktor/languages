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
        name: 'Chinantec, Ojitlán',
        nameT: 'Chinantec, Ojitlán',
        iso3: 'chj',
        wiki: 'Chinantec_of_Ojitl%C3%A1n',
        names: 'Chinantec,Comaltepec,Chinanteco del Norte,Jmiih kia’ dzä ‘vï ï,Jujmi',
        hasDetect: true
    });
});
//# sourceMappingURL=chj.js.map