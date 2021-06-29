export class BaseEntity {
   protected value: string = '☠️';
   protected size: number = 3;
   constructor(public coords: ICoords = { x: 0, y: 0 }) { }

   render(context: CanvasRenderingContext2D,) {
      context.font = `${this.size}em serif`;
      context.fillText(this.value, this.coords.x, this.coords.y);
   }
}

export interface ICoords { x: number, y: number; }