<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SOLO EXHIBITION</title>
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@3.0.2/destyle.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if ($_POST) {
    $to = 'moshimosshi@gmail.com';
    // $to = 'miyuki.f1986@gmail.com';

    $subject = 'メッセージが届きました';

    $message = "メッセージが届きました。\n";
    $message .= "入力された内容は以下の通りです。\n";
    $message .= "---\n";
    $message .= "\n";
    $message .= "お名前：\n";
    $message .= $_POST["name"]; // name属性がnameの内容が入ります
    // $message .= "\n";
    // $message .= "メールアドレス:\n";
    // $message .= $_POST["email"]; // name属性がemailの内容が入ります
    $message .= "\n";
    $message .= "メッセージ本文:\n";
    $message .= $_POST["message"]; // name属性がmessageの内容が入ります

    //↓最後に、設定した内容でメールを送る命令です
    if (mb_send_mail($to, $subject, $message)) {
?>

<body>
    <main class="contact_inner">
        <p>ありがとうございます。メッセージが送信されました。</p>
        <a href="index.html">元のサイトに戻る</a>
    </main>
</body>

<?php
        echo "ありがとうございます。メッセージが送信されました。";
        echo "Thank you for your message!";
    } else {
        echo "メールの送信に失敗しました";
    }
} else {
    echo "HTMLからのPOST送信受信に失敗しました";
}

?>

</html>