export class Item {
    constructor(
      public id: string,
      public name: string,
      public category: string,
      public quantity: number,
      public price: number,
      public supplier: string,
      public stockStatus: string,
      public featured: boolean,
      public specialNote?: string
    ) {}
  
    static generateId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
  }