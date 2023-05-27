import { router } from "../trpc";
import { todoRouter } from "./todo";

// Routerの実装
export const appRouter = router({ todo: todoRouter }); // プロシージャーを登録。todoRouterは、プロシージャー

/*
  * Routerの中が増えてきた場合は以下のように分けることもできる
　```
  const userRouter = router({
    findOne: //　実装,
    findMany: // 実装,
  })

  const postRouter = router({
    findOne: // 実装,
    findMany: // 実装,
  })

  const appRouter = router({
    user: userRouter,
    post: postRouter,
  })

  * clientから呼び出す場合は、以下のようになる
  const user = await trpc.user.findOne.query({ id: 1 })
  const post = await trpc.post.findOne.query({ id: 1 })
  const users = await trpc.user.findMany.query()
  const posts = await trpc.post.findMany.query()
  ```

*/

// export type definition of API
export type AppRouter = typeof appRouter;