import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      email: 'Shanna@melissa.tv',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      email: 'Nathan@yesenia.net',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      email: 'Julianne.OConner@kory.org',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      email: 'Lucio_Hettinger@annie.ca',
      role: 'ADMIN',
    },
  ];
  findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
  create(user: User) {
    const highestId=[...this.users].sort((a,b)=>b.id-a.id)[0]
    const newUser={
        id:highestId.id+1,
        ...user
    }
    return this.users.push(newUser);
  }
  updateOne(id:number,updatedUser: User) {
    this.users=this.users.map(user=>{
        if(user.id===id){
            return {...user,...updatedUser}
        }
        return user 
    })
    return this.findOne(id)
  }
  deleteOne(id: number) {
    const removedUser=this.findOne(id)
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser
}
}
