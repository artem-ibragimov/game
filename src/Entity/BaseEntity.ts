export abstract class BaseEntity {
   protected position: ICoords = { x: 0, y: 0 };

   protected image: HTMLImageElement = new Image();
   protected frameSize: ISize = { width: 128, height: 64 };
   protected frameCoords: ICoords = { x: 0, y: 0 };
   protected loop: boolean = false;

   constructor(cfg: IEntityConfig) {
      this.position = cfg.position;
      this.image.src = cfg.imageSrc;
      this.loop = cfg.loop;
      this.tick = this.tick.bind(this);
      setInterval(this.tick, 200);
   }

   tick() {
      if (this.frameCoords.x + this.frameSize.width < this.image.width) {
         this.frameCoords.x += this.frameSize.width;
         return;
      }
      if (this.frameCoords.y + this.frameSize.height < this.image.height) {
         this.frameCoords.x = 0;
         this.frameCoords.y += this.frameSize.height;
         return;
      }
      if (this.loop) {
         this.frameCoords = { x: 0, y: 0 };
      }
   }

   render(context: CanvasRenderingContext2D,) {
      context.drawImage(
         this.image,
         this.frameCoords.x, this.frameCoords.y,
         this.frameSize.width, this.frameSize.height,
         this.position.x, this.position.y,
         this.frameSize.width, this.frameSize.height,
      );
   }
}

export interface ICoords { x: number, y: number; }
export interface ISize { width: number, height: number; }

interface IEntityConfig {
   position: ICoords;
   imageSrc: string,
   loop: boolean;
}