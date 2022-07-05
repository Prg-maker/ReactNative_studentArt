export interface UserData{
  email:string;
  course:string;
  password:string;
}

export interface UserRepository{
  create:(data:UserData)=> Promise<void>;
}