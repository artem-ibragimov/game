import { BaseEntity, ICoords } from 'entity/BaseEntity';

export class KnightRun extends BaseEntity {
   constructor(position: ICoords) {
      super({
         position,
         imageSrc: '../assert/knight/Run.png',
         loop: true
      });
   }
}