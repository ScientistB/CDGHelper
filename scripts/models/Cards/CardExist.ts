'use strict';

class CardExist extends CardBase {
    constructor(private value: number) {
        super();
    }

    public is_match(cand_nums: number[]): boolean {
        return cand_nums.indexOf(this.value) > -1;
    }

    public get_condition_str(): string {
        return '\\exists n';
    }

    protected _make_name(): string {
        return 'a_n=' + this.value;
    }
}
