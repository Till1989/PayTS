import { PaySystem } from "./PaySystem.js";
export class Bank{
    name: string;
    regCountry: string;
    constructor(name: string, regCountry: string)
    {
        this.name=name;
        this.regCountry=regCountry;
    }
    receivePaydata(data: any[]=[]): void
    {
        this.sendPaydata(data);
    }
    sendPaydata(data: any[]=[]): void
    {
       if(data[0].balance>=data[1])
       {
        
       }
       else
       {
        //
       } 
    }
}