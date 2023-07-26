export class Absence {
    dateStart: string;
    dateEnd: string;
    motif: string;
    typeId: number;
    statutId: number;
  
    constructor() {
      this.dateStart = '';
      this.dateEnd = '';
      this.motif = '';
      this.typeId = 0;
      this.statutId = 0;
    }
  }
  