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
        name: 'Chinese, Gan',
        nameT: '赣语',
        iso3: 'gan',
        wiki: 'Gan_Chinese',
        names: 'Gan,Jiangxi hua,Jiangxinese,Kan'
    });
});
//# sourceMappingURL=gan.js.map