export interface User {
  token : String;

  id : Number


  pseudo : String;

  password : String;

  firstName : String;


  lastName: String;


  email: String;


  role : String


  banned: boolean;


  town: String;


  postCode: String;


  nbStreet: String;


  street : String;


  favoritesTown: Array<String>;


  receivedAlerts: Array<String>;
}
