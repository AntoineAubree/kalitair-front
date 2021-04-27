export interface User {
    token : String;

	/** id */
	id : Number

	/** pseudo */
	pseudo : String;

	/** password */
	password : String;

	/** firstName */
	firstName : String;

	/** lastName */
    lastName: String;

	/** email */
    email: String;

	/** role */
	role : String

	/** banned */
    banned: boolean;

	/** town */
    town: String;

	/** postCode */
    postCode: String;

	/** nbStreet */
    nbStreet: String;

	/** street */
    street : String

	/** favourites towns */
    favoritesTown: Array<String>;

	/** received alerts Dto */
    receivedAlerts: Array<String>;
}