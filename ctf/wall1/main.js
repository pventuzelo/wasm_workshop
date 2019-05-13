
const memory = new WebAssembly.Memory({ initial: 256, maximum: 256 });
const importObj = {
    env: {
        abortStackOverflow: () => { throw new Error('overflow'); },
        table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' }),
        tableBase: 0,
        memory: memory,
        memoryBase: 1024,
        STACKTOP: 0,
        STACK_MAX: memory.buffer.byteLength,
    }
};



(async () => {
  const fetchPromise = fetch('./wall1.wall');
  const { instance } = await WebAssembly.instantiateStreaming(fetchPromise, importObj);
  var result = instance.exports._is_this_the_flag('flag');
  if (result == 1) {
        result = "CONGRATS - THATS THE FLAG";
  } else {
        result = "THE FLAG IS SAFE BEHIND THIS GREAT GREAT WALL";
  }  
   document.querySelector('main').textContent = ` ${ result }.`;
})();

