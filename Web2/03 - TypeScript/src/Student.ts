import Person from "./Person";


export default class Student implements Person {
    private fullName: string;

    constructor(public firstName:string, public lastName:string, public session: string) {
        this.fullName = firstName + " " + lastName;
    }

    show():string {
        return this.fullName;
    }
}