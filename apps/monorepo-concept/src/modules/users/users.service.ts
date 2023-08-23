import { Injectable } from '@nestjs/common';
import db from '../../database/models';
const { User } = db;

@Injectable()
export class UsersService {

    async getAllUsers() {
        return await User.findAll();
    }

    async createUser(body: any) {
        return await User.create(body);
    }
}
