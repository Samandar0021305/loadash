function union<T>(...arrays:T[][]):T[]{
    const resultsArrays:T[] = [];
    arrays.forEach((array:T[]):void=>{
        resultsArrays.push(...array)
    })
    return Array.from(new Set([...resultsArrays]));
}

export default union