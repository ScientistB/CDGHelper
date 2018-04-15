'use strict';

describe('CDGのE2Eテスト', function() {
    beforeEach(function() {
        // 実行する直前に、index.htmlのプレビューからURLを取ってくること
        browser.get('http://localhost:63342/ConvergenceDeterminationGameHelper/index.html?_ijt=idsbaiq2vn8srjadl6f401jocd')
    });

    var match_candidates_num = element(by.binding('match_candidates_num'));
    var use_buttons = element.all(by.buttonText('使う'));

    it('初期化', function() {
        var card_groups = element.all(by.repeater('cards in vm.card_groups'));
        expect(card_groups.count()).toEqual(7);

        expect(use_buttons.count()).toEqual(30);
    });

    it('カード使用', function() {
        expect(match_candidates_num.getText()).toEqual('残り125通り');

        // a_n=1を使う
        use_buttons.first().click();
        expect(use_buttons.count()).toEqual(29);
        expect(match_candidates_num.getText()).toEqual('残り61通り');
    });

    it('候補表示の切替', function() {
        var cand_btn = element(by.buttonText('候補を表示'));
        var cands = element.all(by.binding('get_candidate_nums(cand)'));

        // 初期状態では候補は見えてない
        expect(cands.count()).toEqual(0);

        // 初期状態の候補数
        cand_btn.click();
        expect(cands.count()).toEqual(125);

        // 候補数が減る
        use_buttons.first().click();
        expect(cands.count()).toEqual(61);

        // 再び候補を隠せる
        cand_btn.click();
        expect(cands.count()).toEqual(0);
    });
});
