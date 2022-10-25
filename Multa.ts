export class Multa{

    private fechaini:string="";
    private fechafin:string="";

    constructor(fechaini:string,fechafin:string){
        this.fechaini=fechaini;
        this.fechafin=fechafin;
    }

    public get_fechaini():string{
        return this.fechaini;
    }
    public set_fechaini(fechaini:string){
        this.fechaini=fechaini;
    }
    public get_fechafin():string{
        return this.fechafin;
    }
    public set_fechafin(fechafin:string){
        this.fechafin=fechafin;
    }
}