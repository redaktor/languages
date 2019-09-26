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
        name: 'ut-Ma’in',
        nameT: 'ut-Ma’in',
        iso3: 'gel',
        wiki: 'Ut-Ma%27in_language',
        names: 'Fakai,Fakanchi,Fakanci,Fakkanci,Gelanchi'
    });
});
//# sourceMappingURL=gel.js.map