export class User {
	private _token: String =''
	private _id: Number = 0
	private _pseudo : String = ''
	private _password : String = ''
	private _firstName : String = ''
    private _lastName: String = ''
    private _email: String = ''
	private _role: String = ''
    private _banned: boolean = false
    private _townName: String = ''
    private _postCodeCode: String = ''
    private _addressNbStreet: String = ''
    private _addressStreet: String = ''
	private _receivedAlerts: Array<String> = [];

	constructor(pseudo: String , password: String , firstName: String , lastName: String , email: String , role: String , banned: boolean , townName: String , postCodeCode: String , addressNbStreet: String , addressStreet: String , receivedAlerts: Array<String> ) {
		this._pseudo = pseudo;
		this._password = password;
		this._firstName = firstName;
		this._lastName = lastName;
		this._email = email;
		this._role = role;
		this._banned = banned;
		this._townName = townName;
		this._postCodeCode = postCodeCode;
		this._addressNbStreet = addressNbStreet;
		this._addressStreet = addressStreet;
		this._receivedAlerts = receivedAlerts;
	}


    /**
     * Getter token
     * @return {String }
     */
	public get token(): String  {
		return this._token;
	}

    /**
     * Getter id
     * @return {Number }
     */
	public get id(): Number  {
		return this._id;
	}

    /**
     * Getter pseudo
     * @return {String }
     */
	public get pseudo(): String  {
		return this._pseudo;
	}

    /**
     * Getter password
     * @return {String }
     */
	public get password(): String  {
		return this._password;
	}

    /**
     * Getter firstName
     * @return {String }
     */
	public get firstName(): String  {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {String }
     */
	public get lastName(): String  {
		return this._lastName;
	}

    /**
     * Getter email
     * @return {String }
     */
	public get email(): String  {
		return this._email;
	}

    /**
     * Getter role
     * @return {String }
     */
	public get role(): String  {
		return this._role;
	}

    /**
     * Getter banned
     * @return {boolean }
     */
	public get banned(): boolean  {
		return this._banned;
	}

    /**
     * Getter townName
     * @return {String }
     */
	public get townName(): String  {
		return this._townName;
	}

    /**
     * Getter postCodeCode
     * @return {String }
     */
	public get postCodeCode(): String  {
		return this._postCodeCode;
	}

    /**
     * Getter addressNbStreet
     * @return {String }
     */
	public get addressNbStreet(): String  {
		return this._addressNbStreet;
	}

    /**
     * Getter addressStreet
     * @return {String }
     */
	public get addressStreet(): String  {
		return this._addressStreet;
	}

    /**
     * Getter receivedAlerts
     * @return {Array<String> }
     */
	public get receivedAlerts(): Array<String>  {
		return this._receivedAlerts;
	}

    /**
     * Setter token
     * @param {String } value
     */
	public set token(value: String ) {
		this._token = value;
	}

    /**
     * Setter id
     * @param {Number } value
     */
	public set id(value: Number ) {
		this._id = value;
	}

    /**
     * Setter pseudo
     * @param {String } value
     */
	public set pseudo(value: String ) {
		this._pseudo = value;
	}

    /**
     * Setter password
     * @param {String } value
     */
	public set password(value: String ) {
		this._password = value;
	}

    /**
     * Setter firstName
     * @param {String } value
     */
	public set firstName(value: String ) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {String } value
     */
	public set lastName(value: String ) {
		this._lastName = value;
	}

    /**
     * Setter email
     * @param {String } value
     */
	public set email(value: String ) {
		this._email = value;
	}

    /**
     * Setter role
     * @param {String } value
     */
	public set role(value: String ) {
		this._role = value;
	}

    /**
     * Setter banned
     * @param {boolean } value
     */
	public set banned(value: boolean ) {
		this._banned = value;
	}

    /**
     * Setter townName
     * @param {String } value
     */
	public set townName(value: String ) {
		this._townName = value;
	}

    /**
     * Setter postCodeCode
     * @param {String } value
     */
	public set postCodeCode(value: String ) {
		this._postCodeCode = value;
	}

    /**
     * Setter addressNbStreet
     * @param {String } value
     */
	public set addressNbStreet(value: String ) {
		this._addressNbStreet = value;
	}

    /**
     * Setter addressStreet
     * @param {String } value
     */
	public set addressStreet(value: String ) {
		this._addressStreet = value;
	}

    /**
     * Setter receivedAlerts
     * @param {Array<String> } value
     */
	public set receivedAlerts(value: Array<String> ) {
		this._receivedAlerts = value;
	}


	
	



}

