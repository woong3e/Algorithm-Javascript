const solution = (s) => {
  return s
    .split(' ')
    .map((strArr) =>
      strArr
        .split('')
        .map((str, idx) =>
          (idx + 1) % 2 !== 0 ? str.toUpperCase() : str.toLowerCase()
        )
        .join('')
    )
    .join(' ');
}
