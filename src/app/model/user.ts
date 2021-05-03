export interface User {
	token: string
	id: number
	pseudo : string
	password : string
	firstName : string
    lastName: string
    email: string
	role: string
    banned: boolean
    townName: string
    postCodeCode: string
    addressNbStreet: string
    addressStreet: string
	receivedAlerts: Array<string>
}

