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
        name: 'Chatino, Eastern Highland',
        nameT: 'Chatino, Eastern Highland',
        iso3: 'cly',
        wiki: 'Highland_Chatino',
        names: 'Cha’ jna’a,Chatino de la Zona Alta Oriental,Chatino Oriental Alto,Lachao-Yolotepec Chatino,Sierra Oriental Chatino'
    });
});
//# sourceMappingURL=cly.js.map