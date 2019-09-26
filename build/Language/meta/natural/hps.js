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
        name: 'Hawai’i Sign Language (HSL)',
        nameT: 'Hawai’i Pidgin Sign Language',
        iso3: 'hps',
        wiki: 'Hawai%27i_Sign_Language',
        names: 'Hawai’i Pidgin Sign Language,Hawaiian Sign Language,HPS,HSL'
    });
});
//# sourceMappingURL=hps.js.map