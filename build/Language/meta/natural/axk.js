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
        name: 'Yaka (Central African Republic)',
        nameT: 'Yaka (Central African Republic)',
        iso3: 'axk',
        wiki: 'Aka_language',
        names: 'Aka,Beká,Nyoyaka,Pygmée de la Lobaye,Pygmée de Mongoumba,Pygmées de la Sanghas,Babinga,Beka,Binga,Mòáka,Yaka ("Babinga","Bambenga")'
    });
});
//# sourceMappingURL=axk.js.map