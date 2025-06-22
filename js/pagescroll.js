$(function () {
  // リンクをクリックした場合の処理を指定
  $('a[href^="#"]').click(function () {
    // リンク先の中身を取得する
    const href = $(this).attr("href");
    // リンク先のidがある要素を探して、移動先を取得
    const target = $(href == "#" || href == "" ? "html" : href);
    // ページ上部から移動先までの距離を取得
    const position = target.offset().top;
    // スクロールが完了するまでの時間を5秒に設定
    const speed = 500;
    // ページのトップ位置を指定し、アニメーションメソッドで動きを制御
    $("body,html").animate({
      // potitonまでspeedの時間をかけて変速でスクロールする
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});