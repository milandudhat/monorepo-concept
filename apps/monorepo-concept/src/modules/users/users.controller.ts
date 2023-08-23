import { Controller, Get, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Post, Body } from '@nestjs/common';
import { UsersDto } from './dto/users.dtos';
import { Request, Response } from 'express';
import { ApiAcceptedResponse, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }



    @ApiTags('Users')
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users.' })
    @Get()
    async getAllUsers(@Res() res: Response) {
        const users = await this.userService.getAllUsers();
        res.status(200).json({
            status: 200,
            message: 'Users Fetched Successfully',
            data: users
        })
    }




    @ApiTags('Users')
    @ApiOperation({ summary: 'Create a new user' })
    @ApiBody({ type: UsersDto })
    @ApiResponse({ status: 201, description: 'User successfully created' })
    
    // set placeholder for the response
    @ApiBody({ type: UsersDto }) // Add example data
    

    @Post()
    // @UsePipes(new ValidationPipe())
    async createUser(@Body() data: UsersDto , @Res() res: Response) {
        const user = await this.userService.createUser(data);
        res.status(200).json({
            status: 200,
            message: 'User Created Successfully',
            data: user
        })

        // res.send({
        //     status: 200,
        //     message: 'User Created Successfully',
        //     data: data
        // })
    }
}
