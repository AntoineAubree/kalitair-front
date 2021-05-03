export class User {
	private _token: string =''
	private _id: Number = 0
	private _pseudo : string = ''
	private _password : string = ''
	private _firstName : string = ''
    private _lastName: string = ''
    private _email: string = ''
	private _role: string = ''
    private _banned: boolean = false
    private _townName: string = ''
    private _postCodeCode: string = ''
    private _addressNbStreet: string = ''
    private _addressStreet: string = ''
	private _receivedAlerts: Array<string> = [];

	constructor(pseudo: string , password: string , firstName: string , lastName: string , email: string , role: string , banned: boolean , townName: string , postCodeCode: string , addressNbStreet: string , addressStreet: string , receivedAlerts: Array<string> ) {
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
     * @return {string }
     */
	public get token(): string  {
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
     * @return {string }
     */
	public get pseudo(): string  {
		return this._pseudo;
	}

    /**
     * Getter password
     * @return {string }
     */
	public get password(): string  {
		return this._password;
	}

    /**
     * Getter firstName
     * @return {string }
     */
	public get firstName(): string  {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {string }
     */
	public get lastName(): string  {
		return this._lastName;
	}

    /**
     * Getter email
     * @return {string }
     */
	public get email(): string  {
		return this._email;
	}

    /**
     * Getter role
     * @return {string }
     */
	public get role(): string  {
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
     * @return {string }
     */
	public get townName(): string  {
		return this._townName;
	}

    /**
     * Getter postCodeCode
     * @return {string }
     */
	public get postCodeCode(): string  {
		return this._postCodeCode;
	}

    /**
     * Getter addressNbStreet
     * @return {string }
     */
	public get addressNbStreet(): string  {
		return this._addressNbStreet;
	}

    /**
     * Getter addressStreet
     * @return {string }
     */
	public get addressStreet(): string  {
		return this._addressStreet;
	}

    /**
     * Getter receivedAlerts
     * @return {Array<string> }
     */
	public get receivedAlerts(): Array<string>  {
		return this._receivedAlerts;
	}

    /**
     * Setter token
     * @param {string } value
     */
	public set token(value: string ) {
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
     * @param {string } value
     */
	public set pseudo(value: string ) {
		this._pseudo = value;
	}

    /**
     * Setter password
     * @param {string } value
     */
	public set password(value: string ) {
		this._password = value;
	}

    /**
     * Setter firstName
     * @param {string } value
     */
	public set firstName(value: string ) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {string } value
     */
	public set lastName(value: string ) {
		this._lastName = value;
	}

    /**
     * Setter email
     * @param {string } value
     */
	public set email(value: string ) {
		this._email = value;
	}

    /**
     * Setter role
     * @param {string } value
     */
	public set role(value: string ) {
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
     * @param {string } value
     */
	public set townName(value: string ) {
		this._townName = value;
	}

    /**
     * Setter postCodeCode
     * @param {string } value
     */
	public set postCodeCode(value: string ) {
		this._postCodeCode = value;
	}

    /**
     * Setter addressNbStreet
     * @param {string } value
     */
	public set addressNbStreet(value: string ) {
		this._addressNbStreet = value;
	}

    /**
     * Setter addressStreet
     * @param {string } value
     */
	public set addressStreet(value: string ) {
		this._addressStreet = value;
	}

    /**
     * Setter receivedAlerts
     * @param {Array<string> } value
     */
	public set receivedAlerts(value: Array<string> ) {
		this._receivedAlerts = value;
	}


	
	



}

