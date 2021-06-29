export const randomCoords = (max_x: number, max_y: number): ICoords => ({
   x: (1 - Math.random()) * max_x,
   y: (1 - Math.random()) * max_y
});

export const coordsMatch = (p1: ICoords, p2: ICoords): boolean => p1.x === p2.x && p1.y === p2.y;
interface ICoords {
   x: number;
   y: number;
}