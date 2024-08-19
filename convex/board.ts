import { v } from "convex/values";

import { mutation } from "./_generated/server";

const images = [
  "/jeep.gif",
  "/balloons.gif",
  "/balloons_2.gif",
  "/balloons_3.gif",
  "/valentines-day.gif",
  "/baseball.gif",
  "/interaction.gif",
  "/lighthouse.gif",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    // TODO: Later check to delete favorite relation as well

    ctx.db.delete(args.id);
  },
});
