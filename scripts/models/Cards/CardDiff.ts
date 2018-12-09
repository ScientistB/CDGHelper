'use strict';

class CardDiff extends CardBase {
    /**
     * 差がvalueのペアが存在する
     */
    constructor(private value: number) {
        super();
    }

    public is_match(cand_nums: number[]): boolean {
        const len = cand_nums.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                // 同じ数列の項は比較しない
                if (i === j) {
                    continue;
                }

                const diff = cand_nums[i] - cand_nums[j];
                if (diff === this.value || diff === -this.value) {
                    return true;
                }
            }
        }
        return false;
    }

    public get_condition_str(): string {
        return '\\exists m,n~m\\neq n';
    }

    protected _make_name(): string {
        return '|a_m-a_n|=' + this.value;
    }
}
