import { Resolver, Query, Mutation, Arg, Ctx, Int, ID } from "type-graphql";
import User, { AuthType } from '../entities/User';
import bcrypt from 'bcrypt';
import { AuthenticationError } from "apollo-server-express";
// import { signToken } from '../../utils/auth'
import signToken from "../../utils/auth";

@Resolver(User)
export default class UserResolver {
    @Query((_returns) => [User])
    async allUsers(): Promise<User[]> {
        return await User.find({ relations: ["todos"] })
    }

    @Query((_returns) => User)
    async oneUser(@Arg("id") id: string) {
        return await User.findOne({ where: { id }, relations: ["todos"] })
    }

    @Mutation((_returns) => AuthType)
    async createUser(@Arg("username") username: string, @Arg("password") password: string) {
        // BCRYPT PASSWORD ENCRYPTION
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
        const newUser = User.create({ username, password })
        await newUser.save()
        // LOG USER IN - CREATE TOKEN
        const token = signToken(newUser);

        // RETURN USER AUTH TYPE
        return { token, user: newUser };
    }

    @Mutation((_returns) => AuthType)
    async loginUser(@Arg("username") username: string, @Arg("password") password: string) {
        const user = await User.findOneBy({ username });
        if (!user) {
            throw new AuthenticationError("Username not found");
        }
        // console.log(user)
        const correctPw = await user.validatePassword(password)
        // console.log(correctPw)
        if (!correctPw) {
            throw new AuthenticationError("Incorrect Password");
        }

        const token = signToken(user)
        return { token, user }
    }
}