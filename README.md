# プロジェクト名 : Mindows 39

デモ·ページ : [link](https://jolly-duckanoo-52ac00.netlify.app)
デモ·ビデオ : [link](https://youtu.be/8nfAS4_ponU)

## 1. プロジェクト紹介

プログラムが人間に話しかけると、エラーメッセージの形で表現されます。

このアプリケーションは、パソコンと人間のコミュニケーションを「エラーメッセージ」で表現するユニークな仕組みを持っています。

エラーメッセージを消去するたびに特定のイベントが発生し、興味深い体験を提供します。

また、すべてのコンテスト楽曲に対応しており、モバイルデバイスでの利用も考慮しました。

楽しんでいただければ幸いです。

## 2. ローカル実行環境設定

### 実行

[node js](https://nodejs.org/en)がインストールされているコンピューターにこのプロジェクトをクローンしてください

```
npm install

npm run dev
```

### ビルド

```
npm run build
```

### ビルドバージョン preview

```
npm run preview
```

vite preview は、ローカルでビルドをプレビューするためのもので、本番用のサーバーとしては使えないことに注意してください。

## 3. 開発する際に助けられた場所

### Textalive

[textalive-app-basic](https://github.com/TextAliveJp/textalive-app-basic)

最も基礎的な活用方案であるため、api を理解するのに役立つ。

### Codepen (MIT License)

[joys of windows error](https://codepen.io/jkantner/pen/oNypPOZ)

エラーウィンドウの実装に関する部分で役に立つ

[Windows 10 - Using CSS & JS Only](https://codepen.io/MohamedElGhandour/pen/GEbwEW)

playlist モーダルを作るのに役立った

[Animated Terminal Session](https://codepen.io/simoami/pen/eYrPdz)

terminal プログラムの ui を具現するのに役立つ

[morphology - laptop glitch - dilate](https://codepen.io/janein/pen/LYZEgyK)

svg フィルターを利用してグリッチ効果を出すのに役立つ

### Pretendard Font (Sil Open Font License)

[Pretendard](https://github.com/orioncactus/pretendard)
日本語、英語、韓国語に対応したすっきりしたフォント

### Google Material Symbols & Icons (Apache 2.0 License)

[Google Material Symbols](https://fonts.google.com/icons?icon.size=24&icon.color=%235f6368)
シンプルなマテリアルデザインのアイコンで、オープンソースだ。

## 4. 各ファイルの役割

### animation.js

アニメーション、画面上のテキスト エラー ウィンドウを作成および管理します

### avMessage.js

ウイルス対策 UI テキスト領域を更新する関数です。

### clock.js

下段のバーの時計機能を担当します。

### draggable.js

マウスとタッチで ui をドラッグできるようにするファイル

### eventHandler.js

コントロールパネルに関する機能を扱います（音楽の再生、ジャンプなど）

### loaderFunctions.js

ローダーを表示または非表示にします

### playerControl.js

1. プレイヤーインスタンスを初期化します。

2. アニメーション機能を起動します。

3. 時間の経過とともに現在のコードを更新します。

### progressBar.js

1. アンチウイルス UI の進行状況バーを時間の経過とともに更新します。

2. 曲が終了すると、エラー メッセージが削除される回数に応じてイベントを管理します。

### selectHandler.js

選択した曲をプレーヤーにロードし、UI を更新します。

### terminalMessage.js

ターミナル メッセージ UI を処理するファイルです。このファイルでは、クリア エラーの数に基づいて特定のイベントが実行されます。

### uiControl.js

UI 要素を制御するファイル

### volumeControl.js

ボリュームをコントロールするファイル

### main.js

機能を集めた最上位 js ファイル
