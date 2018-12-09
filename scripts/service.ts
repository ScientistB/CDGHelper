'use strict';

class CDGService {
    public static get_card_name(card: CardBase): string {
        return card.get_name();
    }

    public static init_cards(): CardBase[][] {
        /**
         * 変数が1つのカードの初期化
         * @param constructor カードのコンストラクタ
         * @param min 最小値
         * @param max 最大値
         * @return カードオブジェクトの配列
         */
        function single(constructor: any, min: number, max: number): CardBase[] {
            const cards: CardBase[] = [];
            for (let i = min; i <= max; ++i) {
                cards.push(new constructor(i));
            }
            return cards;
        }

        /**
         * 変数が2つあるカードの初期化
         * @param constructor カードのコンストラクタ
         * @param min 最小値
         * @param max 最大値
         * @return カードオブジェクトの配列
         */
        function double(constructor: any, min: number, max: number): CardBase[] {
            const cards: CardBase[] = [];
            for (let i = min; i <= max; ++i) {
                for (let j = min; j <= max; ++j) {
                    if (i !== j) {
                        cards.push(new constructor(i, j));
                    }
                }
            }
            return cards;
        }

        /**
         * 変数が２つあり、右辺と左辺を交換しても良いカードの初期化
         * @param constructor カードのコンストラクタ
         * @param min 最小値
         * @param max 最大値
         * @return カードオブジェクトの配列
         */
        function double_no_order(constructor: any, min: number, max: number): CardBase[] {
            const cards: CardBase[] = [];
            for (let i = min; i <= max; ++i) {
                for (let j = i + 1; j <= max; j++) {
                    cards.push(new constructor(i, j));
                }
            }
            return cards;
        }

        // 基本的なカードの生成
        const card_groups = [
            single(CardExist, 1, 5),
            single(CardAll, 1, 5),
            double(CardLessThan, 1, 3),
            double(CardLessEqual, 1, 3),
            double_no_order(CardNotEqual, 1, 3),
            single(CardDiff, 0, 3),
        ];

        // 単体カードの作成
        const options = [];
        options.push(new CardDiffEqualPair());
        card_groups.push(options);

        return card_groups;
    }

    public static init_candidates(candidates: Candidate[]): void {
        for (let i = 1; i <= 5; i++) {
            for (let j = 1; j <= 5; j++) {
                for (let k = 1; k <= 5; k++) {
                    candidates.push(new Candidate(i, j, k));
                }
            }
        }
    }

    public static use_card(card: CardBase, candidates: Candidate[]): void {
        card.use_card();
        angular.forEach(candidates, (cand) => {
            cand.is_match(card);
        });
    }

    public static calc_match_candidates_num(candidates: Candidate[]): number {
        let count = 0;
        angular.forEach(candidates, (cand) => {
            if (cand.alive()) count++;
        });
        return count;
    }
}

angular
    .module('CDGHelper')
    .service('CDGService', CDGService);
