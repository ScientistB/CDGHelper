'use strict';

class CardAll extends CardBase {
    constructor(private value: number) {
        super();
    }

    public is_match(cand_nums: number[]): boolean {
        return cand_nums.indexOf(this.value) === -1;
    }

    public get_condition_str(): string {
        return '\\forall n';
    }

    protected _make_name(): string {
        return 'a_n\\neq' + this.value;
    }
}
