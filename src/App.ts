import { randomCoords } from 'canvas';
import { BaseEntity, ICoords } from 'Entity/BaseEntity';
import { BasePerson, People } from 'Entity/People';
import { Places } from 'Entity/places';

export class App {
   placesCoords: ICoords[] = [];
   places: BaseEntity[];
   people: BasePerson[];

   constructor(private canvas: HTMLCanvasElement) {
      this.movePeople = this.movePeople.bind(this);
      this.render = this.render.bind(this);
      canvas.height = canvas.clientHeight;
      canvas.width = canvas.clientWidth;
      const numberOfPlaces = Places.length;

      this.placesCoords = Array.from({ length: numberOfPlaces }).map(() => randomCoords(canvas.width, canvas.height));
      this.places = Places.map((C, i) => new C(this.placesCoords[i]));
      this.people = People.map((C, i) => new C(this.placesCoords[i]));
      requestAnimationFrame(this.render);
      this.movePeople();
   }

   private getRandomPlaceCoords(): ICoords {
      return this.placesCoords[Math.round(Math.random() * this.placesCoords.length)];
   }

   private movePeople() {
      this.people.forEach((p) => { p.move(this.getRandomPlaceCoords()); });
      setTimeout(this.movePeople, (1 - Math.random()) * 2000);
   }

   private render() {
      const ctx = this.canvas.getContext('2d');
      if (!ctx) { return; }
      ctx.globalCompositeOperation = 'destination-over';
      ctx.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
      const render = (p: BaseEntity) => { p.render(ctx); };
      this.places.forEach(render);
      this.people.forEach(render);
      requestAnimationFrame(this.render);
   }
}