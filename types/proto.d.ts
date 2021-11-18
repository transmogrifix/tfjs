export declare const version: {
  'tfjs-core': string;
  'tfjs-backend-cpu': string;
  'tfjs-backend-webgl': string;
  'tfjs-data': string;
  'tfjs-layers': string;
  'tfjs-converter': string;
  tfjs: string;
};

/*
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-core/dist/register_all_gradients';
import '@tensorflow/tfjs-core/dist/public/chained_ops/register_all_chained_ops';
import '@tensorflow/tfjs-data';
import '@tensorflow/tfjs-layers';
import '@tensorflow/tfjs-converter';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import '@tensorflow/tfjs-backend-wasm';
import '@tensorflow/tfjs-backend-webgpu';
*/

/*
/// <reference types="offscreencanvas" />
/// <reference types="webgl-ext" />
/// <reference types="webgl2" />
import * as data from '@tensorflow/tfjs-data';
export { data };
export * from '@tensorflow/tfjs-core';
*/

export * from './lib/tfjs-core/src/index';
export * from './lib/tfjs-layers/src/index';
export * from './lib/tfjs-converter/src/index';
import * as data from './lib/tfjs-data/src/index';
export { data };
export * from './lib/tfjs-backend-cpu/src/index';
export * from './lib/tfjs-backend-webgl/src/index';
export * from './lib/tfjs-backend-wasm/src/index';
export * from './lib/tfjs-backend-webgpu/src/index';
