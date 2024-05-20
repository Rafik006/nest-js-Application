import { Body, Controller, Delete, Get, Param, Patch, Post,Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}
    @Get()
    findAll(@Query("role") role:"INTERN"|"ENGINEER"|"ADMIN"){
        return this.userService.findAll(role)
    }
    @Get(":id")
    findOne(@Param("id") id:string){
        return this.userService.findOne(Number(id))
    }
    @Post()
    create(@Body() user: User){
        return this.userService.create(user) 
    }
    @Patch(":id")
    updateOne(@Param("id") id:string, @Body() userUpdate:User){
        return this.userService.updateOne(Number(id),userUpdate)
    }
    @Delete(":id")
    deleteOne(@Param("id") id:string){
        return this.userService.deleteOne(Number(id))
    }
}
