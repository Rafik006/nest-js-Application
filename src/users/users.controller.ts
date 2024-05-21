import { Body, Controller, Delete, Get, Param, Patch, Post,Query,ParseIntPipe,ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {updatedUserDto} from "./dto/update-user.dto"
@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Get()
    findAll(@Query("role") role:"INTERN"|"ENGINEER"|"ADMIN"){
        return this.userService.findAll(role)
    }
    @Get(":id")
    findOne(@Param("id",ParseIntPipe) id:number){
        return this.userService.findOne(id)
    }
    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.userService.create(createUserDto) 
    }
    @Patch(":id")
    updateOne(@Param("id",ParseIntPipe) id:number, @Body(ValidationPipe) updatedUserDto:updatedUserDto){
        return this.userService.updateOne(id,updatedUserDto)
    }
    @Delete(":id")
    deleteOne(@Param("id",ParseIntPipe) id:number){
        return this.userService.deleteOne(id)
    }
}
