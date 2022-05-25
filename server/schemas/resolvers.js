const { User } = require('../models');
const { signToken } = require('utils/auth');

const resolvers = {
    query: {
        me: async (parent, args, contect) => {
            if (AudioContext.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-_v -password')
                return userData;
            }
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
    }
}
module.exports = resolvers;