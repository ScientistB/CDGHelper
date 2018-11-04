'use strict';
/**
 * 各Cardクラスの基底クラス
 */
var CardBase = /** @class */ (function () {
    /**
     * @constructor
     */
    function CardBase() {
        this.used = false;
    }
    /**
     * カードの名前の取得
     */
    CardBase.prototype.get_name = function () {
        if (angular.isUndefined(this.name)) {
            this.name = this._make_name();
        }
        return this.name;
    };
    /**
     * カードが使用済みであればtrueを返す
     */
    CardBase.prototype.is_used = function () {
        return this.used;
    };
    /**
     * カードを使用済み状態にする
     */
    CardBase.prototype.use_card = function () {
        this.used = true;
    };
    return CardBase;
}());
//# sourceMappingURL=CardBase.js.map