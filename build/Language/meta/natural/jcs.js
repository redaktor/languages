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
        name: 'Jamaican Country Sign Language',
        nameT: 'Jamaican Country Sign Language',
        iso3: 'jcs',
        wiki: 'Jamaican_Country_Sign_Language',
        names: 'Country Sign,Konchri Sain'
    });
});
//# sourceMappingURL=jcs.js.map