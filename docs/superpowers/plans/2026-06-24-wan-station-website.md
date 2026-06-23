# わんステーション 公式サイト Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans (inline) to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** わんステーション公式サイト（縦長トップ1枚＋将来ページの器）を静的サイトとして作り、ローカルで確認できる状態にする。

**Architecture:** 純粋な静的サイト（HTML/CSS/vanilla JS、ビルド工程なし）。トップ `index.html` に全セクションを縦に配置。共通の見た目を `css/style.css`（CSS変数でブランドトークン管理）に集約。`js/main.js` はスマホメニュー・スクロール追従ヘッダー・フェードイン（JSオフでも全内容が読める）。将来ページは `reports.html` / `franchise.html` のスタブ。

**Tech Stack:** HTML5, CSS3（CSS変数・Flexbox・Grid・メディアクエリ）, vanilla JS, Google Fonts（Noto Serif JP / Noto Sans JP）, 画像はフリー素材プレースホルダ。

## Global Constraints

- 言語：日本語サイト。トーンは「安心・信頼」。AI感の出る派手な装飾（強いグラデ・グロー・浮遊3D）は使わない。
- カラー：紺 `#16223C` / ゴールド `#B8862A`〜`#C8932E` / オフ白 `#FAF8F4` / 白 `#FFFFFF` / 本文 `#2C3340` / 補助 `#8A8270` / 罫線 `#ECE6DC`。
- フォント：見出し=Noto Serif JP（明朝, 500–600）、本文=Noto Sans JP。
- 決済・会員DB・ログイン・フォーム送信は作らない。寄付/CFは外部 Readyfor リンク、問い合わせはメール＋SNSリンク（メアド等は当面プレースホルダ＝保留）。
- レスポンシブ必須（PC/タブレット/スマホ）。スマホ最優先。
- JSオフでも全内容が読めること（段階的強化）。
- 後で差し替える値は `〔 〕` で明示（NPO正式情報・SNS/YouTube URL・Readyfor公開URL・実績数字・本物写真）。

---

### Task 1: 土台（ファイル構成・CSSトークン・フォント・ヘッダー/フッター・ロゴ）

**Files:**
- Create: `index.html`（骨組み＋`<head>`＋共通ヘッダー・フッター）
- Create: `css/style.css`（リセット・CSS変数・タイポ・コンテナ・ボタン・ヘッダー/フッター）
- Create: `js/main.js`（空＋スマホメニュー開閉・スクロール追従の枠）
- Create: `assets/logo.svg`（紺円＋ゴールドの犬/肉球の簡易マーク）

**Deliverable:** ヘッダー（ロゴ＋ナビ＋「応援する」ボタン、スマホはハンバーガー）とフッター（NPO情報プレースホルダ＋SNS＋コピーライト）が表示され、フォント・配色が効いている空ページ。

- [ ] Step 1: `assets/logo.svg` を作成（紺円背景＋ゴールドの犬シルエット/肉球、24–32px想定でも視認できる単純形）
- [ ] Step 2: `index.html` に `<!DOCTYPE>`・lang="ja"・meta viewport・OGP・Google Fonts読み込み・`css/style.css`・`js/main.js` を記述
- [ ] Step 3: `css/style.css` にリセット＋`:root`のCSS変数（上記カラー/フォント）＋`.container`（最大幅〜1080px・中央寄せ）＋`.btn`（紺ボタン/ゴーストボタン）＋見出し明朝・本文ゴシックの基本タイポを記述
- [ ] Step 4: 共通ヘッダー（上部ユーティリティバー「NPO法人…｜滋賀県」＋ナビ＋応援ボタン）とフッターを `index.html` に記述、`style.css` でスタイル
- [ ] Step 5: `js/main.js` にハンバーガー開閉＋スクロールでヘッダーに影を付ける処理を記述
- [ ] Step 6: ブラウザ（PC幅・スマホ幅）で表示確認 → 崩れなし
- [ ] Step 7: コミット

### Task 2: ヒーロー＋課題＋コンセプト

**Deliverable:** 1画面目の世界観（見出し・写真・実績バッジ・主要CTA）と、続く「課題」「コンセプト（日常の選択＝支援/買う/見る/広める/参加）」。

- [ ] Step 1: ヒーロー（左：明朝見出し「その命に、続いていく居場所を。」＋補足＋CTA「クラウドファンディングで応援する」＋「わんステとは ›」／右：犬写真＋実績バッジ`〔128頭〕`）
- [ ] Step 2: 課題セクション（「善意への過度な依存が、保護犬支援の継続性を奪っている」＋現場の負担を簡潔に）
- [ ] Step 3: コンセプト（「保護犬支援を、特別な行為ではなく“日常の選択”に」＋5アイコン：支援する/買う/見る/広める/参加する）
- [ ] Step 4: 表示確認（PC/スマホ）
- [ ] Step 5: コミット

### Task 3: 活動5本柱＋体験できること

**Deliverable:** わんステの中身が伝わる中核。

- [ ] Step 1: 「わんステーションとは」5本柱カード（①里親マッチング＋人慣れ訓練 ②全国保健所連携 ③犬の献血ネットワーク WAN BLOOD ④わんちゃんレンタル ⑤触れ合い・撮影スタジオ）
- [ ] Step 2: 「体験できること」（撮影スタジオ＆衣装・ドッグラン・触れ合いエリア）を写真＋短文で
- [ ] Step 3: 表示確認（カードがスマホで縦積みになる）
- [ ] Step 4: コミット

### Task 4: 会員制度・ドナー犬＋お金の流れ・透明性

**Deliverable:** 信頼の核（仕組み・透明性）。

- [ ] Step 1: 会員制度（一般／プレミアム）とドナー犬 WAN BLOOD 認定を軽く紹介、詳細は将来ページへの導線
- [ ] Step 2: 「お金の流れ・透明性」（会員費・寄付・CF・物販・協賛 → NPO集約 → 保護活動へ配分 → 成果。全公開）をステップ図で
- [ ] Step 3: 表示確認
- [ ] Step 4: コミット

### Task 5: CF応援（Readyfor）＋活動報告＋お問い合わせ

**Deliverable:** 行動喚起と窓口。

- [ ] Step 1: 「いま、力を貸してください」＝Readyforへの大きな導線＋資金使途（施設準備・初期医療費・備品・広報 等）。リンクは `〔Readyfor公開URL〕`
- [ ] Step 2: 活動報告（将来の器：「準備中／近日公開」＋ reports.html への導線）
- [ ] Step 3: お問い合わせ・参加方法（支援者／企業・店舗／FC加盟／メディアの入口）＋連絡先 `〔メール〕`・SNS `〔YouTube/X/Instagram〕`（保留プレースホルダ）
- [ ] Step 4: 表示確認
- [ ] Step 5: コミット

### Task 6: 将来ページの器（reports.html / franchise.html）

**Deliverable:** 共通ヘッダー/フッター付きで「準備中」を品よく表示する2スタブ。

- [ ] Step 1: `reports.html`（活動報告・準備中）作成、ヘッダー/フッター共通
- [ ] Step 2: `franchise.html`（FC加盟・準備中。設計書から加盟条件の概要を軽く）作成
- [ ] Step 3: 相互リンク確認
- [ ] Step 4: コミット

### Task 7: 仕上げ（レスポンシブ調整・スクロール演出・QA・README・git）

**Deliverable:** スマホ含め破綻なし、軽いフェードイン、説明書き、リポジトリ初期化。

- [ ] Step 1: 各セクションにスクロールでふわっと表示（IntersectionObserver、prefers-reduced-motion尊重）
- [ ] Step 2: スマホ幅（375px）・タブレット（768px）・PC（1280px）で全セクション目視調整
- [ ] Step 3: Playwrightで index.html を各幅でスクリーンショット → 崩れ/リンク確認 → 修正
- [ ] Step 4: `README.md`（何のサイトか・開き方・後で差し替える項目一覧）作成
- [ ] Step 5: `git init`＋`.gitignore`（.superpowers/・.DS_Store）＋初回コミット
- [ ] Step 6: 完成形を確認できる形でマスターに提示（ブラウザで開く＋スクリーンショット）

---

## Self-Review メモ
- スペック全セクション（1–11＋将来ページ）→ Task 1–6 で網羅、仕上げは Task 7。ギャップなし。
- プレースホルダ値は意図的（`〔 〕`で明示・保留合意済み）。手順自体の TODO 残しは無し。
- 文言・色・フォントは Global Constraints に集約し各タスクで参照。
