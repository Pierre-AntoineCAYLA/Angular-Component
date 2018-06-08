export default class Formation{
_nom: string; 
_description: string;
_prix:number;
_dateDebut:Date;
_dateFin:Date;

constructor(nom:string, description:string,prix:number,dateDebut:Date, dateFin:Date){
this._nom=nom;
this._description=description;
this._prix=prix;
this._dateDebut=dateDebut;
this._dateFin=dateFin;
}
get nom(){return this._nom};
set nom(nom){this._nom=nom};
get description(){return this._nom};
set description(description){this._description=description};
get prix(){return this._prix};
set prix(prix){this._prix=prix};
get dateFin(){return this._dateFin};
set dateFin(dateFin){this._dateFin=dateFin};
get dateDebut(){return this._dateDebut};
set dateDebut(dateDebut){this._dateDebut=dateDebut};
}