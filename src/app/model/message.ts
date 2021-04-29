import {User} from './user';

export interface Message{

  id : Number;
  content : String;
  date : Date;
  user : User;
  idDiscussionThread : Number;

}
