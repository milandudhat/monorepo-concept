import { Injectable } from '@nestjs/common';
import db from '../../database/models';
import { UsersDto } from './dto/users.dtos';
const { User } = db;


@Injectable()
export class UsersService {

    constructor() { 
        console.log('UsersService');
    }
    

    async getAllUsers() {
        return await User.findAll();
    }

    async createUser(data: UsersDto) {
        return await User.create(data);
    }
}
