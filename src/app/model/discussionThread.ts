import { Section } from "./section";

export interface DiscussionThread{

  id :number;
  title : string;
  userId : number;
  sectionId : number;
  edit : boolean;

}
