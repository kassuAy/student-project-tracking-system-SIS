import { Group } from 'next/dist/shared/lib/router/utils/route-regex';

export interface WindowSize {
    width: number;
    height: number;
}

export interface IUser {
    _id?: string;
    email: string;
    fullName: string;
}

export interface LoginUserParams {
    email: string;
    password: string;
}

// export interface IGroup {
//     _id?: string
//     name: string
//     __v?: number
// }

export interface FinalProject{
    _id?:string
    demo_image:File
    project_title:string
    description:string
    accademicYear:Date
    projectFileName:File
}

export interface Group_member{
    name:String,
    student_id:String
}
export interface IGroup{
    _id?:any
    group_name:string
    students:Group_member[]
    batch:string
}
export interface Title_list{
    projectTitle:String,
    description:String
}
export interface ITitle{
    _id?:any,
    groupName:string,
    projects:Title_list[]
}

