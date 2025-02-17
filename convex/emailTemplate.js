import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const SaveTemplate = mutation({
  args: {
    tid: v.string(),
    design: v.any(),
    email: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      console.log("Attempting to save template with args:", args);
      const result = await ctx.db.insert("emailTemplates", {
        tId: args.tid,
        design: args.design,
        email: args.email,
        description: args.description,
      });
      console.log("SaveTemplate success:", result);
      return result;
    } catch (e) {
      console.error("SaveTemplate error:", e);
      throw new Error("Failed to save template");
    }
  },
});

export const GetTemplateDesign = query({
  args: {
    email: v.string(),
    tid: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      console.log("Fetching template data for:", args);
      const result = await ctx.db
        .query("emailTemplates")
        .filter((q) =>
          q.and(
            q.eq(q.field("tId"), args.tid), // `tId` フィールドに一致させる
            q.eq(q.field("email"), args.email)
          )
        )
        .collect();
      console.log("Fetched template data:", result);
      return result[0];
    } catch (e) {
      console.error("EmailTemplate ERROR:", e);
      return {};
    }
  },
});

export const UpdateTemplateDesign = mutation({
  args: {
    tId: v.string(),
    design: v.any(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("emailTemplates")
      .filter((q) => q.eq(q.field("tId"), args.tId))
      .collect();

    const docId = result[0]._id;
    console.log("emailTemplate docId", docId);

    await ctx.db.patch(docId, {
      design: args.design,
    });
  },
});

export const GetAllUserTemplate = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const result = await ctx.db
      .query("emailTemplates")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    return result;
  },
});
