import {User} from './user';
import { DiscussionThread } from "./discussionThread";

export interface Message{

  id : Number;
  content : String;
  date : Date;
  user : User;
  discussion_thread : DiscussionThread;

}
