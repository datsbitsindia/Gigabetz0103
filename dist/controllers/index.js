"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./SignupApi/SignupNewUser"), exports);
__exportStar(require("./loginController"), exports);
__exportStar(require("./userDetailsController"), exports);
__exportStar(require("./userBalanceController"), exports);
__exportStar(require("./generatePointsController"), exports);
__exportStar(require("./depositController"), exports);
__exportStar(require("./withdrawController"), exports);
__exportStar(require("./oddsController"), exports);
__exportStar(require("./exposureLimitController"), exports);
__exportStar(require("./passwordContoller"), exports);
__exportStar(require("./creditContoller"), exports);
__exportStar(require("./statusContoller"), exports);
__exportStar(require("./masterController"), exports);
__exportStar(require("./SportsController"), exports);
__exportStar(require("./proxy/proxyController"), exports);
__exportStar(require("./proxy/matchesController"), exports);
//# sourceMappingURL=index.js.map