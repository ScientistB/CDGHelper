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
var CardAll = /** @class */ (function (_super) {
    __extends(CardAll, _super);
    function CardAll(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    CardAll.prototype.is_match = function (cand_nums) {
        return cand_nums.indexOf(this.value) === -1;
    };
    CardAll.prototype.get_condition_str = function () {
        return '\\forall n';
    };
    CardAll.prototype._make_name = function () {
        return 'a_n\\neq' + this.value;
    };
    return CardAll;
}(CardBase));
//# sourceMappingURL=CardAll.js.map