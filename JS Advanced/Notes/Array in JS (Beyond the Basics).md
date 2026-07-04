# DebugPrint
`%DebugPrint` is an internal, non standard system function built in Google's V8 JavaScript engine. It forces the console to bypass normal console output and print a raw, low level summary of JS object. After running this command the output shows the exact structure (anatomy) V8 has assigned to that object. This includes: 
- **Pointer Address**
  The exact hexadecimal memory location of the object in V8 heap 
  
- **The Map**
  It is a unique memory ID which shows shape of the object. V8 uses it to see if two objects share same exact order and properties 
  
- **Prototype Link**
  The direct internal pointer to object's prototype template
  
- **Elements vs Properties**
  V8 splits data. Indexed array items are classified as `elements`while named key items as `properties`. They both are displayed how these two portions are being stored. 

## Example: 
```javascript
const myArr=[]
%DebugPrint(myArr)
```
This program is compiled using `jsvu`. Compilation command is: 
```shell
v8-debug --allow-natives-syntax script.js
```
This outputs:
```text
DebugPrint: 0x3480104aadd: [JSArray]
 - map: 0x03480101f889 <Map[16](PACKED_SMI_ELEMENTS)> [FastProperties]
 - prototype: 0x03480101f8b1 <JSArray[0]>
 - elements: 0x0348000007e5 <FixedArray[0]> [PACKED_SMI_ELEMENTS]
 - length: 0
 - properties: 0x0348000007e5 <FixedArray[0]>
 - All own properties (excluding elements): {
    0x34800000e39: [String] in ReadOnlySpace: #length: 0x03480072b4cd <AccessorInfo name= 0x034800000e39 <String[6]: #length>, data= 0x034800000011 <undefined>> (const accessor descriptor, attrs: [W__])
 }
0x3480101f889: [Map] in OldSpace
 - map: 0x034801017925 <MetaMap (0x034801017975 <NativeContext[310]>)>
 - type: JS_ARRAY_TYPE
 - instance size: 16
 - inobject properties: 0
 - unused property fields: 0
 - elements kind: PACKED_SMI_ELEMENTS
 - enum length: invalid
 - back pointer: 0x034800000011 <undefined>
 - prototype_validity_cell: 0x034800000b15 <Cell value= [cleared]>
 - instance descriptors #1: 0x03480101fec9 <DescriptorArray[1]>
 - transitions #1: 0x03480101fee5 <TransitionArray[5]>
   Transitions #1:
     0x034800000ed5 <Symbol: (elements_transition_symbol)>: (transition to HOLEY_SMI_ELEMENTS) -> 0x03480101ff01 <Map[16](HOLEY_SMI_ELEMENTS)>
 - prototype: 0x03480101f8b1 <JSArray[0]>
 - constructor: 0x03480101f7d9 <JSFunction Array (sfi = 000003480075EDD5)>
 - dependent code: 0x0348000007f5 <Other heap object (WEAK_ARRAY_LIST_TYPE)>
 - construction counter: 0
```
# Types of Array
There are two types of Arrays in JS
- Continuous (Packed)
- Holey

Each of the types of array are further classified into:
- SMI (small integer)
- Packed Element
- Double (float, string)

## Continuous (Packed)
Continuous arrays contain no missing elements/holes. All the indexes of the array must be filled. 

### PACKED_SMI_ELEMENTS
This is the fastest and most optimized array. It contains only small integers (SMIs). It is has Highly optimized unboxed memory representation.  
```javascript
const arr = [ 1 , 2 , 3 , 4 , 5 ]
```

### PACKED_DOUBLE_ELEMENTS
It contains floating point numbers or integers that are too large for SMI. V8 allocates contiguous block of 64 bit raw doubles. 
```javascript
const arr = [ 1.1 , 2.2 , 3.3 ] 
```

### PACKED_ELEMENTS
It is the slowest of them all. It contains mixed types, objects, strings or other JS values. Elements are pointers to boxed objects on the heap. 
```javascript 
const arr = [ 1  "Hello" , { key : "val" } ]
```

## Holey
Holey arrays contain missing indexes (gaps). V8 must perform expensive actions to see if the missing index exists higher up on the prototype chain. 

These actions move through a sequence. First it does bound check, then moves to `hasOwnPrototype(arr,9)` , if failed then moves to `hasOwnPrototype(arr.prototype,9)` and if failed again then it searches in `hasOwnPrototype(Object.prototype,9)`. The last one is the most expensive operation which makes Holey slow. 

Packed array are always resolved at first check so they don't need to move to other checks, hence resulting in faster handling. 

### HOLEY_SMI_ELEMENTS
Contains only integers but atleast one missing element 
```javascript
const arr = [ 1 , , 3 ]
```

### HOLEY_DOUBLE_ELEMENTS
Contains floating point numbers but atleast one missing index. 
```javascript
const arr = [ 1.1 , , 2.2 ]
```

### HOLEY_ELEMENTS 
This is slowest among Holey array types. It contains mixed values or objects with missing indexes.
```javascript
const arr = new Array(3) 
// or 
const arr1 = [ 1.1 , , false , "Hello" ]
```

## NOTE:
An array type can change or upgrade. For example if i push decimal in `PACKED_SMI_ELEMENTS`, it upgrades to `PACKED_DECIMAL_ELEMENTS`. However, this is one way which means now we cannot go back to `PACKED_SMI_ELEMENTS` even if i remove the decimal numbers. 

The same happens with change between `PACKED` and `HOLEY`. If i set an empty index in `PACKED`, it will transition to `HOLEY`. But it cannot be converted to `PACKED` even if holes are removed. 