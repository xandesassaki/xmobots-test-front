export interface IRunway{
    designation: string;
    width: number;
    length: number;
}

export interface IAerodrome{
    name: string;
    city: string;
    description: string;
    created_at: string;
    runways: IRunway;
}