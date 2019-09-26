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
    zip = { wholly: 'whole',
        idly: 'idle',
        fully: 'full',
        practically: 'practical',
        theoretically: 'theoretical',
        sporadically: 'sporadic',
        basically: 'basic',
        grammatically: 'grammatical',
        alphabetically: 'alphabetical',
        economically: 'economical',
        conically: 'conical',
        politically: 'political',
        vertically: 'vertical',
        critically: 'critical',
        fantastically: 'fantastic',
        mystically: 'mystical',
        pornographically: 'pornographic',
        jolly: 'jolly' };
    return zip;
});
//# sourceMappingURL=decline.js.map