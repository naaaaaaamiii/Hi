// ページ内リンクのみ取得します。
$('a[href^=#]').click(function(){
    //デフォルトのイベントをキャンセル
    event.preventDefault();

    // 移動先となる要素を取得します。
    var target = $(this.hash);
    if (!target.length) return;

    // 移動先の位置を取得します
    var targetY = target.offset().top;

    // animateで移動します
    $('body').animate({scrollTop: targetY}, 10, 'swing');

});