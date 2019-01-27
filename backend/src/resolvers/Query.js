const Query = {
    dogs: function(parent, arguments, context, info) {
        global.dogs = global.dogs || [];
        return global.dogs;
    }
};

module.exports = Query;
