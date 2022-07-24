import { prisma, PrismaClient } from '@prisma/client';

export async function GetKeyValidationPipe<T>({
  entityName,
  uuid,
}: {
  entityName: any;
  uuid: string;
}) {
  // TODO: Bracket記法での型乗り越える方法を考えて、anyをやめる。
  const prisma: any = new PrismaClient();
  const id = await prisma[entityName]
    .findUniqueOrThrow({
      where: { uuid },
      select: { id: true },
    })
    .then((res: any) => res.id);
  return id;
}
