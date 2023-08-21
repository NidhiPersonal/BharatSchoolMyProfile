import { User } from "./user";

export class userConfig {
    user? : User
    // id: string | undefined ;
    // name: string | undefined ;
    // email: string | undefined ;
    // photo : String | undefined;
    // grade : Int32Array | undefined;
    // phone : string | undefined;
    // board : String | undefined;
    // parentName : String | undefined;
    // address : String | undefined;
    logoutHandler? : (userId : String) => void;
    updateUserDetails? : (newUserData : User) => void;
}