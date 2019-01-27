const Mutation = {
    async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem(
            {
                data: {
                    title: args.title,
                }
            },
            info
        );

        return item;
    }
};

module.exports = Mutation;
