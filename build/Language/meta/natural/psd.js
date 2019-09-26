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
        name: 'Plains Indian Sign Language',
        nameT: 'Plains Indian Sign Language',
        iso3: 'psd',
        wiki: 'Plains_Indian_Sign_Language',
        names: 'Hand Talk,Indian Language of Signs,Indian Sign Language,NAISL,North American Indian Sign Language,PISL,Plains Sign Language,Plains Sign Talk,PST,Sign Talk'
    });
});
//# sourceMappingURL=psd.js.map