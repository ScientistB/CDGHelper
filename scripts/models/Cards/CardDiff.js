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
var CardDiff = /** @class */ (function (_super) {
    __extends(CardDiff, _super);
    /**
     * 差がvalueのペアが存在する
     * @param value
     * @constructor
     */
    function CardDiff(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    CardDiff.prototype.is_match = function (cand_nums) {
        var len = cand_nums.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len; j++) {
                // 同じ数列の項は比較しない
                if (i === j) {
                    continue;
                }
                var diff = cand_nums[i] - cand_nums[j];
                if (diff === this.value || diff === -this.value) {
                    return true;
                }
            }
        }
        return false;
    };
    CardDiff.prototype.get_condition_str = function () {
        return '\\exists m,n~m\\neq n';
    };
    CardDiff.prototype._make_name = function () {
        return '|a_m-a_n|=' + this.value;
    };
    return CardDiff;
}(CardBase));
//# sourceMappingURL=CardDiff.js.map