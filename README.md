# わんステーション 公式サイト

滋賀発・保護犬支援プラットフォーム「わんステーション」（NPO法人わんステーション・ジャパン）の公式サイトです。
**暖色エディトリアル（生成り×セリフ×全面写真）**のデザインで、縦長トップ1枚＋将来ページの器（活動報告・FC加盟）の静的サイトです。

## 開き方（ローカルで見る）

`index.html` をダブルクリックでも見られますが、より正確にはローカルサーバー経由がおすすめです：

```
cd ~/わんステーション
python3 -m http.server 8000
# → ブラウザで http://localhost:8000
```

## ファイル構成

```
わんステーション/
├── index.html        … トップ（暖色エディトリアル版・採用デザイン）
├── reports.html      … 活動報告（準備中の器）
├── franchise.html    … FC加盟（準備中の器）
├── classic.html      … 旧・紺版デザイン（参考用に保存／サイトからはリンクなし）
├── css/
│   ├── editorial.css … 採用デザインの見た目（色・フォントは :root で一括管理）
│   └── style.css     … classic.html 専用
├── js/
│   ├── editorial.js  … 採用デザインの動き（メニュー・スクロール演出）
│   └── main.js       … classic.html 専用
├── assets/
│   ├── logo.svg      … ロゴ（仮）
│   └── img/          … 写真（すべて差し替え前提のフリー素材プレースホルダ）
└── docs/             … 設計書・実装プラン
```

## 公開（限定URL）

GitHub Pages で限定公開中：**https://xkx0xux.github.io/wan-station/**
（全ページ noindex ＋ robots.txt で検索よけ済み。GitHub repo = `xkx0xux/wan-station`）
更新は `git push` で数分後に自動反映されます。

## あとで差し替えるところ（本文中は 〔 〕 で表示）

- **Readyfor の公開URL** … トップの「Readyforで応援する」リンク
- **メールアドレス・SNS / YouTube のURL** … お問い合わせ欄とフッター
- **NPOの正式情報** … 所在地・代表者など
- **写真** … `assets/img/` の各画像を本物の写真へ（特にクリーム背景のスタジオ写真にすると映えます）

## デザインの方針

- 参考：furfolk.dog のような「暖色ミニマル・写真主役・編集的」な世界観
- 生成り `#F4EFE4` ＋ セリフ見出し（Noto Serif JP / Cormorant Garamond）＋ 余白広め
- スマホ最適化（レスポンシブ）
- 写真は暖色トーンに統一処理して、仮写真でも馴染むように
