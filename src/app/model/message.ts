import {User} from './user';

export interface Message{

  id : number;
  content : String;
  date : Date;
  user : User;
  idDiscussionThread : Number;
  edit : boolean;

}
