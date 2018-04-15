'use strict';

/**
 * 各Cardクラスの基底クラス
 */
var CardBase = (function () {
    /**
     * @constructor
     */
    function CardBase() {
        this.used = false;
    }

    // public methods
    CardBase.prototype = {
        use_card: use_card,
        get_name: get_name,
        is_used: is_used,
        is_match: is_match,
        get_condition_str: get_condition_str,
        _make_name: _make_name
    };

    return CardBase;

    /**
     * カードを使用済み状態にする
     */
    function use_card() {
        this.used = true;
    }

    /**
     * カードが使用済みであればtrueを返す
     * @return {boolean}
     */
    function is_used() {
        return this.used;
    }

    /**
     * カードの名前の取得
     */
    function get_name() {
        if (angular.isUndefined(this.name)) {
            this.name = this._make_name();
        }
        return this.name;
    }

    /**
     * 与えられた数列の候補が、カードの条件と一致しているかどうかを返す抽象メソッド
     * @param cand_nums: 候補の数字の配列
     */
    function is_match(cand_nums) {
        throw new Error('Not Implemented');
    }

    /**
     * カード共通の条件を表す文字列を返す抽象メソッド
     */
    function get_condition_str() {
        throw new Error('Not Implemented');
    }

    /**
     * カードの画面表示用の文字列を生成する抽象メソッド
     * @protected
     */
    function _make_name() {
        throw new Error('Not Implemented');
    }
})();
