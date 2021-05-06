import { Section } from "./section";
import { User } from "./user";

export interface DiscussionThread{

  id :number;
  title : String;
  userId : number;
  section : Section;
  messages : Array<String>;
  edit : boolean;

}
