'use strict';

/**
 * 各Cardクラスの基底クラス
 */
abstract class CardBase {
    public used: boolean;
    public name: string;

    /**
     * @constructor
     */
    protected constructor() {
        this.used = false;
    }

    /**
     * カードの名前の取得
     */
    public get_name(): string {
        if (angular.isUndefined(this.name)) {
            this.name = this._make_name();
        }
        return this.name;
    }

    /**
     * カードが使用済みであればtrueを返す
     */
    public is_used(): boolean {
        return this.used;
    }

    /**
     * 与えられた数列の候補が、カードの条件と一致しているかどうかを返す抽象メソッド
     */
    public abstract is_match(cand_nums: number[]): boolean;

    /**
     * カードを使用済み状態にする
     */
    public use_card(): void {
        this.used = true;
    }

    /**
     * カード共通の条件を表す文字列を返す抽象メソッド
     */
    public abstract get_condition_str(): string;

    /**
     * カードの画面表示用の文字列を生成する抽象メソッド
     */
    protected abstract _make_name(): string;
}
