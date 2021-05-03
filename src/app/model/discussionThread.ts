import { Section } from "./section";
import { User } from "./user";

export interface DiscussionThread{

  id :number;
  title : String;
  user :User;
  section : Section;
  messages : Array<String>;
  edit : boolean;

}
