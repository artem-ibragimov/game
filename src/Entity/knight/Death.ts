import { BaseEntity, ICoords } from 'entity/BaseEntity';

export class KnightDeath extends BaseEntity {
   constructor(position: ICoords) {
      super({
         position,
         imageSrc: '../assert/knight/Death.png',
         loop: false
      });
   }
}