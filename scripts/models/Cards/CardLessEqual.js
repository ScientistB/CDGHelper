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
var CardLessEqual = /** @class */ (function (_super) {
    __extends(CardLessEqual, _super);
    /**
     * left ≦ right
     * @param left 左辺値
     * @param right 右辺値
     */
    function CardLessEqual(left, right) {
        var _this = _super.call(this) || this;
        _this.left = left;
        _this.right = right;
        return _this;
    }
    CardLessEqual.prototype.is_match = function (cand_nums) {
        return cand_nums[this.left - 1] <= cand_nums[this.right - 1];
    };
    CardLessEqual.prototype.get_condition_str = function () {
        return '\\leq';
    };
    CardLessEqual.prototype._make_name = function () {
        return 'a_' + this.left + '\\leq a_' + this.right;
    };
    return CardLessEqual;
}(CardBase));
//# sourceMappingURL=CardLessEqual.js.map