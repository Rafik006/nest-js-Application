import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(){
        return []
    }
    @Get(":id")
    findOne(@Param("id") id:string){
        return {id}
    }
    @Post()
    create(@Body() user: {}){
        return user 
    }
    @Patch(":id")
    updateOne(@Param("id") id:string, @Body() userUpdate:{}){
        return {id,...userUpdate}
    }
    @Delete(":id")
    deleteOne(@Param("id") id:string){
        return "deleted"
    }
}