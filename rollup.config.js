import nodeResolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import typeScript from '@rollup/plugin-typescript';

const output = {
   file: 'static/app.min.js',
   format: 'cjs'
};
const plugins = [
   nodeResolve(),
   commonJs(),
   typeScript({ tsconfig: "tsconfig.json" }),
];

export default [{
   input: ['src/main.ts'],
   output,
   plugins
}];