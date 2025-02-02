import type { DOMAttributes } from './jsx-qwik-attributes';
import type { JSXNode } from './jsx-node';
import type { QwikIntrinsicElements } from './jsx-qwik-elements';

/**
 * @public
 */
export namespace QwikJSX {
  export interface Element extends JSXNode<any> {}
  export interface IntrinsicAttributes {
    [key: string]: any;
  }
  export interface IntrinsicElements extends QwikIntrinsicElements {}
}

export interface QwikDOMAttributes extends DOMAttributes<any> {}
