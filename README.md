# JAVASCRIPT

## JavaScript: 

- Single-threaded language. It uses a callback
- It is an interpreted language(depending on the implementation)

## JavaScript Engine:

- Translator
- JS files get understood by the engine, and it allows this engine to communicate and tell the computer to do what we asked it to do with JS
- First JS engine: SpiderMonkey
- Brendan Eich - JS creator
- V8 Engine - most common, fastest
- JS code >> parser >> AST(abstract syntax tree) >> Interpreter
	- Interpreter >> ByteCode
	- Interpreter >> Profiler >> Compiler >> Optimized Code >> 1010101
- breakdowns the stringified code
- ECMAScript -  Instead of having multiple engines we have this to standardize and show how we should do things in JS and how it should work
- Interpreter - we translate and read the files line by line on the fly
- Compiler - it doesn’t translate on the fly. It works ahead of time to create a translation of the code we have just written. And it compiles down to usually a language that can be understood by our machines. 
- Two ways to run JS - using a compiler or interpreter
- Compiler examples. They take on language and convert it into a different one
  - Babel: is a JS compiler that takes your modern JS code and returns browser-compatible JS
  - TypeScript: is a superset of JS that compiles down to JS

### Interpreter

Pros:
- Quick to get up and running
Cons:
- If you are running a code(like a loop) more than once even though it gives us the same result, it can get really slow

### Compiler
Pros:
- Smart enough to understand the same output and simplify. It doesn’t need to repeat the translation for each pass-through
- In a loop, it is faster
Cons:
It takes a little bit more time to start up because it has to go through that compilation step at the beginning, go through our code, understand it, and spit it out into another language.


- Instead of using the compiler or interpreter, we have some combined structures like git compilers or just in time compilers. Browsers started mixing compilers specifically these two to make the engines faster
- For V8 Engine:
  - Initially, the code is sent to the interpreter, and in the V8 engine is called the ignition
  - In ignition, it takes the AST(abstract syntax tree) and spits out bytecode
  - Bytecode is not low level as machine code but it’s a code that can be interpreted by the JS engine to run the program
  - Profilers are monitors. They are checking out our code and making notes on how we can optimize the code. If the same lines of the code run a few times, it passes off some of this code to the JIT compiler.
  - The compiler replaces the sections where they could be improved of the bytecode with optimized machine code
- Compilers can make mistakes while optimizing code. 
- Writing optimized code: avoid or be careful with
  - eval()
  - arguments
  - for in
  - with
  - delete
  - Hidden classes
  - Inline caching

