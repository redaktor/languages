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
        name: 'Yerong',
        nameT: 'Yerong',
        iso3: 'yrn',
        wiki: 'Buyang_language',
        names: 'Ban Yao,Da Ia,Daban Yao,Eastern Buyang,Guangxi Buyang,Ia Hrong,Iron Yao,Khyung Buyang,Liu Yao,Napo Buyang,Six Yao,Tie Yao,Tu Yao Indigenous Yao,Yalang,Yang Khyung,Yerong Buyang'
    });
});
//# sourceMappingURL=yrn.js.map