import {
  createTaskSchema,
  getSingleTaskSchema,
  updateTaskSchema,
  deleteTaskSchema,
} from "../../../schema/todo";
import { router, publicProcedure, protectedProcedure } from "../trpc";

/*
  * プロシージャーは具体的なルータの実装を記述するところ

  * publicProcedureは、複数のプロパティを持つ
  * 1. input: APIの入力値
    * 1.1. inputの型は、Zodのスキーマを使用して定義し、その値をqueryやmutationの引数として使用する
    * 1.2. Zodで作られたスキーマ情報から型情報を抜き出すためには、z.infer型を使用する
    * 1.3. z.infer型のジェネリクスとして型を抽出したいスキーマをtypeof演算子を用いて渡すことによって、TypeScriptの型情報を取得
    * ex)
      const userSchema = z.object({ name: z.string() })
      type User = z.infer<typeof userSchema>
    * zodのスキーマ情報を別のファイルにまとめておくと、再利用生が増して便利
  * 2. query: 値の取得
  * 3. mutation: 値の更新
*/

export const todoRouter = router({
  createTask: protectedProcedure
    .input(createTaskSchema)
    .mutation(async ({ ctx, input }) => {
      const task = await ctx.prisma.task.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return task;
    }),
  getTasks: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.task.findMany({
      where: {
        userId: ctx.session?.user?.id,
      },
      orderBy: {
        id: "desc",
      },
    });
  }),
  getSingleTask: protectedProcedure
    .input(getSingleTaskSchema)
    .query(({ ctx, input }) => {
      return ctx.prisma.task.findUnique({
        where: {
          id: input.taskId,
        },
      });
    }),
  updateTask: protectedProcedure
    .input(updateTaskSchema)
    .mutation(async ({ ctx, input }) => {
      const task = await ctx.prisma.task.update({
        where: {
          id: input.taskId,
        },
        data: {
          title: input.title,
          body: input.body,
        },
      });
      return task;
    }),
  deleteTask: protectedProcedure
    .input(deleteTaskSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.task.delete({
        where: {
          id: input.taskId,
        },
      });
    }),
});