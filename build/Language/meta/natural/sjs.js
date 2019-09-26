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
        name: 'Senhaja De Srair',
        nameT: 'Senhaja De Srair',
        iso3: 'sjs',
        wiki: 'Sanhaja_de_Srair_language',
        names: 'Senhaja de Srair,Senhajiya,Shilha,Shilha Barbarya,Shilha n Jbala,Tajeblit,Tamazight,Tamazight n Jbala,Tasenhajit'
    });
});
//# sourceMappingURL=sjs.js.map