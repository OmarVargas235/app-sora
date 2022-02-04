export interface ISenedEmail {
    email:string;
}

export interface IChangePassword {
    password:string;
    repeatPassword:string;
    token:string;
}

export interface IVerifyTokenURL {
    token:string;
}