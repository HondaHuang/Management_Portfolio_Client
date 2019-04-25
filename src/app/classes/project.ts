import { Consultant } from './consultant';
import { ClientPOC } from './clientpoc';

export class Project {
    id:Number;
    name:string;
    type:string;
    start:Date;
    end:Date;
    duration:number;
    status:string;
    methodology:string;
    description:string;
    tools:string;
    pm:string;
    dm:string;
    client:string;
    budget:number;
    effort:number;
    consultants:Consultant[];
    clientPOCs:ClientPOC[];
}
