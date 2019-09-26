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
        name: 'Gavião Do Jiparaná',
        nameT: 'Gavião Do Jiparaná',
        iso3: 'gvo',
        wiki: 'Gavi%C3%A3o_of_Jiparan%C3%A1',
        names: 'Digüt,Gavião do Rondônia,Ikolen,Ikõro'
    });
});
//# sourceMappingURL=gvo.js.map