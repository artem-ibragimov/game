import { BaseEntity } from 'entity/BaseEntity';
import { KnightAttacks } from 'entity/knight/Attack';
import { KnightDeath } from 'entity/knight/Death';
import { KnightRun } from 'entity/knight/Run';

export class App {
   knight: BaseEntity;

   constructor(private canvas: HTMLCanvasElement) {
      this.render = this.render.bind(this);
      canvas.height = canvas.clientHeight;
      canvas.width = canvas.clientWidth;
      this.knight = new KnightAttacks({ x: 0, y: 0 });

      // setTimeout(() => { this.knight = new KnightDeath({ x: 0, y: 0 }); }, 3000);
      requestAnimationFrame(this.render);
   }

   private render() {
      const ctx = this.canvas.getContext('2d');
      if (!ctx) { return; }
      ctx.globalCompositeOperation = 'destination-over';
      ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
      const render = (p: BaseEntity) => { p.render(ctx); };
      this.knight.render(ctx);
      requestAnimationFrame(this.render);
   }
}