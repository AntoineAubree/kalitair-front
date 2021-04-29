import { DiscussionThread } from "./discussionThread";
import {User} from './user';

export interface Section{

  id : number;
  title : string;
  user : User;
  discussionThreads : Array <DiscussionThread>;

}
