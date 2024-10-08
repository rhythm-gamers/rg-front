"use server";

import { revalidateTag } from "next/cache";

export async function revalidateFromTag(tagName: string) {
  await revalidateTag(tagName);
}
