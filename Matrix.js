const Matrix = {
  get: {
    at: (m, r, c) => m[r][c],
    nn: (m, r, c) => m[r - 1][c],
    ne: (m, r, c) => m[r - 1][c + 1],
    ee: (m, r, c) => m[r][c + 1],
    se: (m, r, c) => m[r + 1][c + 1],
    ss: (m, r, c) => m[r + 1][c],
    sw: (m, r, c) => m[r + 1][c - 1],
    ww: (m, r, c) => m[r][c - 1],
    nw: (m, r, c) => m[r - 1][c - 1]
  },
  set: {
    at: (m, r, c, v) => (m[r][c] = v),
    nn: (m, r, c, v) => (m[r - 1][c] = v),
    ne: (m, r, c, v) => (m[r - 1][c + 1] = v),
    ee: (m, r, c, v) => (m[r][c + 1] = v),
    se: (m, r, c, v) => (m[r + 1][c + 1] = v),
    ss: (m, r, c, v) => (m[r + 1][c] = v),
    sw: (m, r, c, v) => (m[r + 1][c - 1] = v),
    ww: (m, r, c, v) => (m[r][c - 1] = v),
    nw: (m, r, c, v) => (m[r - 1][c - 1] = v)
  },
  coord: {
    at: (r, c) => ({ r: r, c: c }),
    nn: (r, c) => ({ r: r - 1, c: c }),
    ne: (r, c) => ({ r: r - 1, c: c + 1 }),
    ee: (r, c) => ({ r: r, c: c + 1 }),
    se: (r, c) => ({ r: r + 1, c: c + 1 }),
    ss: (r, c) => ({ r: r + 1, c: c }),
    sw: (r, c) => ({ r: r + 1, c: c - 1 }),
    ww: (r, c) => ({ r: r, c: c - 1 }),
    nw: (r, c) => ({ r: r - 1, c: c - 1 })
  },
  new: (rs, cs) => seq(rs).map(_ => seq(cs).map(_ => 0)),
  rows: m => m.length - 1,
  cols: m => m[0].length - 1,
  dirs: {
    NN: 'nn',
    NE: 'ne',
    EE: 'ee',
    SE: 'se',
    SS: 'ss',
    SW: 'sw',
    WW: 'ww',
    NW: 'nw',
  }
};

export default Matrix
