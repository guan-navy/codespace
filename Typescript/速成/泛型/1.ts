import {User,fn} from './2'
{
    const user = new User<string>('张三')
    console.log(user.getName())
    console.log(  fn<string>(user.getName()));
   
}