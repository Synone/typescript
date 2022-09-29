/**
 * #region
 *
 */

//  primative types
type Primatives =
  | number
  | string
  | boolean
  | symbol
  | bigint
  | undefined
  | null;

const primative: Primatives = true;
// literal types
type Literals = 20 | 'Hello' | true | 10000n;
/* | ... */

const twenty: Literals = 20;

// Data structures

type DataStructures =
  | { key1: boolean; key2: number }
  | { [key1: string]: number }
  | [number, boolean]
  | number[];
const data: DataStructures = { ['Sony']: 100 };
console.log(data);
// Union and intersections

type Union = number | boolean;
