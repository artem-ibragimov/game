import nodeResolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typeScript from '@rollup/plugin-typescript';

const output = { file: 'app.js', format: 'cjs' };
const plugins = [
   nodeResolve(),
   commonJs(),
   typeScript({ tsconfig: "tsconfig.json" }),
   terser(), // minification
];

export default [{
   input: ['src/main.ts'],
   output,
   plugins
}];