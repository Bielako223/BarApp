export class DrinkClass{
    'Id': number;
    'Name': string;
    'Description': string;
    "PrepIngred": Array<string>;
    "PrepInstruct": Array<string>;
    "Strength": Array<any>;
    "Taste": Array<string>;
    "Alcohol": Array<string>;
    "Ingredients": Array<string>;
    'Points': number;
    'PointsMax': number;
    'Percentage': number;
    'Img': string;
  }
  
export  type  ObjectClass={
    key: string;
    value: string;
  }