export default class Formation{
_nom: string; 
_description: string;

constructor(nom:string, description:string){
this._nom=nom;
this._description=description;
}
get nom(){return this._nom};
set nom(nom){this._nom=nom};
get description(){return this._nom};
set description(description){this._description=description};
}