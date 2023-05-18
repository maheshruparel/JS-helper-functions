function removeKeyIfNoValue(obj) {
  Object.keys(obj).forEach( e => {
    if(!obj[e]) {
      delete obj[e];
    }
  }) 
  return obj;
}
