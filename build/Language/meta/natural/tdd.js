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
        name: 'Tai Nüa',
        nameT: 'Tai Nüa',
        iso3: 'tdd',
        wiki: 'Tai_N%C3%BCa_language',
        names: 'Chinese Shan,Chinese Tai,Dai Kong,Dai Na,Dai Nuea,Daide,Dehong,Dehong Dai,Shan,Tai Dehong,Tai Le,Tai Mao,Tai Neua,Tai nö,Tai Nü,Tai Nue,Tai taü,Tai-Kong,Tai-Le,Yunannese Shan,Yunnan Shant’ou,Tai Nuea,Tai Kong'
    });
});
//# sourceMappingURL=tdd.js.map