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
        name: 'Kanju',
        nameT: 'Kanju',
        iso3: 'kbe',
        wiki: 'Umpila_language',
        names: 'Gandanju,Gandju,Jabuda,Kaantyu,Kamdhue,Kandju,Kandyu,Kanyu,Karnu,Neogulada,Yaldiye-Ho'
    });
});
//# sourceMappingURL=kbe.js.map