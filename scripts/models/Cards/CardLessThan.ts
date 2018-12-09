'use strict';

class CardLessThan extends CardBase {
    /**
     * left < right
     * @param left 左辺値
     * @param right 右辺値
     */
    constructor(public left, public right) {
        super();
    }

    public is_match(cand_nums: number[]): boolean {
        return cand_nums[this.left - 1] < cand_nums[this.right - 1];
    }

    public get_condition_str(): string {
        return '<';
    }

    protected _make_name(): string {
        return 'a_' + this.left + '<' + 'a_' + this.right;
    }
}
