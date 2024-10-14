function intersection(...args) {
  const set = new Set();
  const len = args[0].length
  for (let i = 0; i < len; i++) {
    set.add(args[0][i]);
  }

  const n = args.length;
  for (let i = 1; i < n; i++) {
    for (let item of args[i]) {
      if (!set.has(item)) set.delete(item);
    }
  }

  return Array.from(set);
}

module.exports = intersection;
