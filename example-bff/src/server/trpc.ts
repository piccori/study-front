import { initTRPC } from '@trpc/server';

/**
 * ルーターを初期化する際、tRPCでは以下のことができます： // https://trpc.io/docs/server/introduction
  * リクエストコンテキストの設定
  * プロシージャーにメタデータを割り当てる
  * フォーマットとエラーの処理
  * 必要に応じてデータを変換する
  * ランタイムコンフィギュレーションのカスタマイズ
  ```
  const  t  = initTRPC.context<Context>().meta<Meta>().create({)
    ...
  });
  ```
 */

const t = initTRPC.create();

export const router = t.router;
export const procedure = t.procedure;