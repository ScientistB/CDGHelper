'use strict';

class CardNotEqual extends CardBase {
    /**
     * left ≠ right
     * @param left 左辺値
     * @param right 右辺値
     */
    constructor(private left: number, private right: number) {
        super();
    }

    public is_match(cand_nums: number[]): boolean {
        return cand_nums[this.left - 1] !== cand_nums[this.right - 1];
    }

    public get_condition_str(): string {
        return '\\neq';
    }

    protected _make_name(): string {
        return 'a_' + this.left + '\\neq a_' + this.right;
    }
}
