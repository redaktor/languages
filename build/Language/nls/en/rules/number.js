(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    zip = { negative: /^(-|minus|negative)[\s\-]/i,
        factors: [{ reg: /\b(a)?(one-)?(\s)?half([\s\-])?(of\s)?/i, mult: 0.5 },
            { reg: /\b(a)?(one-)?(\s)?quarter([\s\-])?(of\s)?/i,
                mult: 0.25 }],
        ordinals: /(?:\w*)(st|nd|rd|th)(?: |$)/i };
    return zip;
});
//# sourceMappingURL=number.js.map