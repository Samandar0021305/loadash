function get(source, path, defaultValue = undefined) {
    if(!source || path.length === 0) return defaultValue;
     const newArr = Array.isArray(path) ? path : path.replaceAll("[",".").replaceAll("]","").split(".");
    for(const item of newArr){
      if(source === null || !(item in source)) return defaultValue;
      source = source[item];
    }
    return source;
  }

  module.exports = get;