import { BaseEntity, ICoords } from 'entity/BaseEntity';

export class KnightAttacks extends BaseEntity {
   constructor(position: ICoords) {
      super({
         position,
         imageSrc: '../assert/knight/Attacks.png',
         loop: false
      });
   }
}