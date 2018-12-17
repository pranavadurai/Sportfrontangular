import { Profile } from '../model/Profile';

 export class User {

   id:number;
   name:string;
   email:string;
   createdAt:string;
   token:string;
   profile:Profile;
   avatarUrl?:any;
 }
