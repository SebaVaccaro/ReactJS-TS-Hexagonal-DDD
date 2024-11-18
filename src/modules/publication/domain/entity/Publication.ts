export class Publication{
    _id: string
    userCreate: string
    description: string
    privateData: string
    requests: string[]
    matches: string[]
    constructor(
        _id: string,
        userCreate: string,
        description: string,
        privateData: string,
        requests: string[],
        matches: string[]){
            this._id = _id
            this.userCreate = userCreate
            this.description = description
            this.privateData = privateData
            this.requests = requests
            this.matches = matches
    }
}