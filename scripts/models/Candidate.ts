'use strict';

/**
 * 候補数列のクラス
 */
class Candidate {
    private readonly a: number[];
    private unmatched_cards: object[];

    /**
     * @param {Number} a1 候補の数字1つ目
     * @param {Number} a2 2つ目
     * @param {Number} a3 3つめ
     * @constructor
     */
    constructor(private a1: number, a2: number, a3: number) {
        this.a = [a1, a2, a3];
        this.unmatched_cards = [];
    }

    /**
     * その候補が生き残っているかどうかを返す
     */
    public alive(): boolean {
        return this.unmatched_cards.length === 0;
    }

    /**
     * 候補の数字を配列で返す
     * @return {Array}
     */
    public get_nums(): number[] {
        return this.a;
    }

    /**
     * 指定されたカードの条件が候補の数字に合っているかを返す
     * @param {Object} card 条件の書かれたCardオブジェクト
     */
    public is_match(card): boolean {
        const result = card.is_match(this.a);
        if (result === false) {
            this.unmatched_cards.push(card);
        }
        return result;
    }
}
