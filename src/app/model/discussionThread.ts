import { Section } from "./section";
import { User } from "./user";

export interface DiscussionThread{

  id :Number;
  title : String;
  user :User;
  section : Section;
  messages : Array<String>;

}
