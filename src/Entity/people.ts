import { coordsMatch } from 'canvas';
import { BaseEntity, ICoords } from 'Entity/BaseEntity';

export class BasePerson extends BaseEntity {
   protected size = 1;
   protected speed = 1;
   protected destination: ICoords = this.coords;
   private is_moving: boolean = false;

   move(coords: ICoords) {
      if (this.is_moving) { return; }
      this.is_moving = true;
      this.destination = coords;
   }

   tick() {
      if (coordsMatch(this.destination, this.coords)) {
         this.is_moving = false;
         return;
      }
      this.coords.x = this.destination.x > this.coords.x ? this.coords.x + this.speed : this.coords.x - this.speed;
      this.coords.y = this.destination.y > this.coords.y ? this.coords.y + this.speed : this.coords.y - this.speed;
   }

   render(ctx: CanvasRenderingContext2D) {
      super.render(ctx);
      this.tick();
   }
}

class ManFarmer extends BasePerson {
   value = '👨‍🌾';
}

export const People = [ManFarmer];