import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Get()
    async getAllUsers() {
        return {
            message: await this.userService.getAllUsers()
        }
    }

    @Post()
    async createUser(@Body() body: any) {
        return {
            message: await this.userService.createUser(body)
        }
    }
}
