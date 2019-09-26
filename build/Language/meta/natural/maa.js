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
        name: 'Mazatec',
        nameT: 'Mazatec',
        iso3: 'maa',
        wiki: 'Tec%C3%B3atl_Mazatec',
        names: 'Mazateco de San Antonio Eloxochitlán,Mazateco de San Jerónimo Tecóatl,Mazateco del Oeste,Northern Highland Mazatec',
        hasDetect: true
    });
});
//# sourceMappingURL=maa.js.map