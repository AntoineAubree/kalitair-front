import { DiscussionThread } from "./discussionThread";
import {User} from './user';

export interface Section{

  id : Number;
  title : String;
  user : User;
  discussionThreads : Array <DiscussionThread>;

}
