# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

金沢工業大学 夢考房AI・データサイエンスプロジェクト **Data Dreamers** の公式ポータルサイト。Next.js 14 (App Router) + Yamada UI + microCMS で構成されたブログ・情報発信サイト。パッケージマネージャーは **pnpm**。

## Commands

```bash
pnpm dev          # 開発サーバー起動
pnpm build        # プロダクションビルド
pnpm start        # プロダクションサーバー起動
pnpm lint         # Biome によるリント (src/ 以下)
pnpm fix          # Biome による自動修正
```

テスト用フレームワークは導入されていない。

## Environment Variables

`.env.local` に以下を設定する（`.env.example` 参照）:

```
MICROCMS_BLOG_SERVICE_DOMAIN=
MICROCMS_BLOG_API_KEY=
```

## Architecture

### ルーティング (App Router)

`src/app/` 配下が Next.js App Router のページ。主なルート:

| ルート | 概要 |
|--------|------|
| `/` | トップページ |
| `/about` | Data Dreamers 紹介 |
| `/blog` | ブログ一覧（microCMS から取得、`revalidate=300`） |
| `/blog/[id]` | ブログ詳細（ドラフトプレビュー対応: `?draftKey=`） |
| `/news` | ニュース |
| `/contact` | お問い合わせ |
| `/for-new-dreamers` | 新メンバー向け |

### データ取得 (microCMS)

`src/libs/microcms/client.ts` で `microcms-js-sdk` クライアントを初期化。ブログ一覧・詳細・カテゴリ取得に使用。型定義は `src/types/blog.ts`（`Blog`, `Content`, `Category`）。

### UIフレームワーク

**Yamada UI** (`@yamada-ui/react`) をメインUIライブラリとして使用。テーマは `src/theme/` で管理:

- `src/theme/tokens/colors.ts` — カラートークン
- `src/theme/tokens/gradients.ts` — グラデーション
- `src/theme/index.ts` — `extendTheme` でカスタムテーマを構築、`initialColorMode: "dark"` 固定

`src/app/providers.tsx` で `UIProvider` にテーマと config を渡す。

### コンポーネント構造

```
src/components/
  atoms/        # 汎用原子コンポーネント (Button など)
  features/     # 機能コンポーネント (Article, CategorySelector, SearchInput など)
  layout/       # レイアウトコンポーネント (Header, Footer, Navigation, Section など)
  animations/   # アニメーション (ViewportFade)
  schedule/     # スケジュール表示
```

### パスエイリアス

`tsconfig.json` で `~/*` → `./src/*` に解決。import 時は `~/` プレフィックスを使う。

## Linting

Biome v2 を使用（`biome.json`）。主な設定:
- `noUnusedVariables`, `noUnusedImports`: error
- `useHookAtTopLevel`: error
- `console.warn/error` は warn、`console.log` は許可
- import の自動整列 (`organizeImports: on`)

pre-commit フックは **lefthook** で管理。
