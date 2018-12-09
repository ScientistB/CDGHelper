'use strict';
var CDGService = /** @class */ (function () {
    function CDGService() {
    }
    CDGService.get_card_name = function (card) {
        return card.get_name();
    };
    CDGService.init_cards = function () {
        /**
         * 変数が1つのカードの初期化
         * @param constructor カードのコンストラクタ
         * @param min 最小値
         * @param max 最大値
         * @return カードオブジェクトの配列
         */
        function single(constructor, min, max) {
            var cards = [];
            for (var i = min; i <= max; ++i) {
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
        function double(constructor, min, max) {
            var cards = [];
            for (var i = min; i <= max; ++i) {
                for (var j = min; j <= max; ++j) {
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
        function double_no_order(constructor, min, max) {
            var cards = [];
            for (var i = min; i <= max; ++i) {
                for (var j = i + 1; j <= max; j++) {
                    cards.push(new constructor(i, j));
                }
            }
            return cards;
        }
        // 基本的なカードの生成
        var card_groups = [
            single(CardExist, 1, 5),
            single(CardAll, 1, 5),
            double(CardLessThan, 1, 3),
            double(CardLessEqual, 1, 3),
            double_no_order(CardNotEqual, 1, 3),
            single(CardDiff, 0, 3),
        ];
        // 単体カードの作成
        var options = [];
        options.push(new CardDiffEqualPair());
        card_groups.push(options);
        return card_groups;
    };
    CDGService.init_candidates = function (candidates) {
        for (var i = 1; i <= 5; i++) {
            for (var j = 1; j <= 5; j++) {
                for (var k = 1; k <= 5; k++) {
                    candidates.push(new Candidate(i, j, k));
                }
            }
        }
    };
    CDGService.use_card = function (card, candidates) {
        card.use_card();
        angular.forEach(candidates, function (cand) {
            cand.is_match(card);
        });
    };
    CDGService.calc_match_candidates_num = function (candidates) {
        var count = 0;
        angular.forEach(candidates, function (cand) {
            if (cand.alive())
                count++;
        });
        return count;
    };
    return CDGService;
}());
angular
    .module('CDGHelper')
    .service('CDGService', CDGService);
//# sourceMappingURL=service.js.map