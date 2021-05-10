import {User} from './user';

export interface Message{

  id : number;
  content : string;
  date : Date;
  userId : number;
  userPseudo : string;
  discussionThreadId : number;
  edit : boolean;
  discussionThreaaTitle : string;

}
