const Mutation = {
    createDog(parent, arguments, context, info) {
        global.dogs = global.dogs || [];
        const newDog = { name: arguments.name };
        global.dogs.push(newDog);
        return newDog;
    }
};

module.exports = Mutation;
