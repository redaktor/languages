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
        name: 'Irish Sign Language',
        nameT: 'Irish Sign Language',
        iso3: 'isg',
        wiki: 'Irish_Sign_Language',
        names: 'AISL,Teanga Chomharthaíochta na hÉireann'
    });
});
//# sourceMappingURL=isg.js.map