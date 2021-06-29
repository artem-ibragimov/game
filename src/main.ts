import { App } from 'App';

window.onload = () => {
   const canvas = document.querySelector<HTMLCanvasElement>('#canvas');
   if (!canvas) { return; }
   new App(canvas);
};

