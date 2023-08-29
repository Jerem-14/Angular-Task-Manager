export class Task {
    constructor(
      public titre: string,
      public description: string,
      public etat: Etat
    ) {}
  }
  
  export enum Etat {
    EN_COURS = "En cours",
    A_FAIRE = "À faire",
    TERMINEE = "Terminée"
  }
  