'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CardDiffEqualPair = /** @class */ (function (_super) {
    __extends(CardDiffEqualPair, _super);
    function CardDiffEqualPair() {
        return _super.call(this) || this;
    }
    CardDiffEqualPair.prototype.is_match = function (cand_nums) {
        var len = cand_nums.length;
        for (var l = 0; l < len; l++) {
            for (var n = 0; n < len; n++) {
                // この条件を先に見るためにmのループを後にしている
                if (l === n)
                    continue;
                for (var m = 0; m < len; m++) {
                    var d1 = cand_nums[l] - cand_nums[m];
                    if (d1 < 0)
                        d1 = -d1;
                    var d2 = cand_nums[m] - cand_nums[n];
                    if (d2 < 0)
                        d2 = -d2;
                    if (d1 === d2)
                        return true;
                }
            }
        }
        return false;
    };
    CardDiffEqualPair.prototype.get_condition_str = function () {
        return '';
    };
    CardDiffEqualPair.prototype._make_name = function () {
        return '\\exists l,m,n~l\\neq n~|a_l-a_m|=|a_m-a_n|';
    };
    return CardDiffEqualPair;
}(CardBase));
//# sourceMappingURL=CardDiffEqualPair.js.map