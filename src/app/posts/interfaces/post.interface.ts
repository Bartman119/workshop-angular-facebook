import { User } from "./user.interface";

export interface Post {
    id:          string;
    createdTime: string;
    author:      User;
    body:        string;
    images:      string[];
}

