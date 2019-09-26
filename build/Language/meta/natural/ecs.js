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
        name: 'Ecuadorian Sign Language',
        nameT: 'Ecuadorian Sign Language',
        iso3: 'ecs',
        wiki: 'Ecuadorian_Sign_Language',
        names: 'Lengua de Señas de Ecuador,LSEC'
    });
});
//# sourceMappingURL=ecs.js.map