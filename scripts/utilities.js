'use strict';

/**
 * クラスを継承する関数
 * ほぼ以下のURLから持ってきたもの
 * http://www.yunabe.jp/docs/javascript_class_in_google.html
 * @param {Function} child 子クラスのコンストラクタ
 * @param {Function} parent 親クラスのコンストラクタ
 */
var inherits = function(child, parent) {
    /** @constructor */
    function temp() {}
    temp.prototype = parent.prototype;
    child.superClass_ = parent.prototype;
    child.prototype = new temp();

    /** @override */
    child.prototype.constructor = child;
};

/**
 * オーバーライド用関数
 * prototypeを明示的に使わずにオーバーライドできる
 * これを使わなくても、prototypeの該当箇所を上書きすれば、オーバーライドは出来る
 * @param class_constructor: クラスのコンストラクタ
 * @param method: ここに指定した関数で、元のメソッドをオーバーライドする
 */
var override = function(class_constructor, method) {
    class_constructor.prototype[method.name] = method;
};
