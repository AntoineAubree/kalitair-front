import {User} from './user';

export interface Message{

  id : number;
  content : string;
  date : Date;
  userId : number;
  DiscussionThreadId  : number;
  edit : boolean;

}
