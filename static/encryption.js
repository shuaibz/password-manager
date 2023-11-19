const toNumber = {
  J: 0,
  '%': 1,
  Z: 2,
  O: 3,
  R: 4,
  n: 5,
  b: 6,
  4: 7,
  V: 8,
  z: 9,
  W: 10,
  P: 11,
  v: 12,
  U: 13,
  q: 14,
  p: 15,
  1: 16,
  0: 17,
  9: 18,
  c: 19,
  E: 20,
  '@': 21,
  A: 22,
  2: 23,
  h: 24,
  g: 25,
  L: 26,
  8: 27,
  5: 28,
  k: 29,
  B: 30,
  i: 31,
  S: 32,
  j: 33,
  s: 34,
  X: 35,
  '&': 36,
  _: 37,
  M: 38,
  m: 39,
  G: 40,
  D: 41,
  a: 42,
  r: 43,
  K: 44,
  F: 45,
  I: 46,
  N: 47,
  t: 48,
  '-': 49,
  u: 50,
  '#': 51,
  o: 52,
  6: 53,
  Y: 54,
  7: 55,
  H: 56,
  w: 57,
  $: 58,
  l: 59,
  3: 60,
  e: 61,
  d: 62,
  Q: 63,
  '!': 64,
  C: 65,
  x: 66,
  y: 67,
  f: 68,
  T: 69
}

const toLetter = {
  0: 'J',
  1: '%',
  2: 'Z',
  3: 'O',
  4: 'R',
  5: 'n',
  6: 'b',
  7: '4',
  8: 'V',
  9: 'z',
  10: 'W',
  11: 'P',
  12: 'v',
  13: 'U',
  14: 'q',
  15: 'p',
  16: '1',
  17: '0',
  18: '9',
  19: 'c',
  20: 'E',
  21: '@',
  22: 'A',
  23: '2',
  24: 'h',
  25: 'g',
  26: 'L',
  27: '8',
  28: '5',
  29: 'k',
  30: 'B',
  31: 'i',
  32: 'S',
  33: 'j',
  34: 's',
  35: 'X',
  36: '&',
  37: '_',
  38: 'M',
  39: 'm',
  40: 'G',
  41: 'D',
  42: 'a',
  43: 'r',
  44: 'K',
  45: 'F',
  46: 'I',
  47: 'N',
  48: 't',
  49: '-',
  50: 'u',
  51: '#',
  52: 'o',
  53: '6',
  54: 'Y',
  55: '7',
  56: 'H',
  57: 'w',
  58: '$',
  59: 'l',
  60: '3',
  61: 'e',
  62: 'd',
  63: 'Q',
  64: '!',
  65: 'C',
  66: 'x',
  67: 'y',
  68: 'f',
  69: 'T'
}

// All capital letters (26)
// All small letters (26)
// All digits (10)
// ! @ # $ % & _ - (8)

// Scramblers randomly scrambles letters
const scramblers = {
  10: {
    '!': 'H',
    H: '!',
    z: 'M',
    M: 'z',
    Y: '6',
    6: 'Y',
    '#': '%',
    '%': '#',
    _: 'B',
    B: '_',
    c: '9',
    9: 'c',
    F: 'f',
    f: 'F',
    T: 'V',
    V: 'T',
    t: '5',
    5: 't',
    u: 'a',
    a: 'u',
    D: 'I',
    I: 'D',
    0: 'p',
    p: '0',
    U: 'o',
    o: 'U',
    '@': 'P',
    P: '@',
    Q: '2',
    2: 'Q',
    m: '4',
    4: 'm',
    8: 'N',
    N: '8',
    k: 's',
    s: 'k',
    W: 'g',
    g: 'W',
    O: 'E',
    E: 'O',
    K: 'q',
    q: 'K',
    C: 'x',
    x: 'C',
    $: 'b',
    b: '$',
    '-': 'y',
    y: '-',
    h: 'J',
    J: 'h',
    i: '1',
    1: 'i',
    n: '3',
    3: 'n',
    7: 'j',
    j: '7',
    '&': 'v',
    v: '&',
    w: 'l',
    l: 'w',
    X: 'A',
    A: 'X',
    e: 'Z',
    Z: 'e',
    G: 'd',
    d: 'G',
    S: 'R',
    R: 'S',
    r: 'L',
    L: 'r'
  },

  9: {
    '!': 'a',
    a: '!',
    B: 'w',
    w: 'B',
    g: 'M',
    M: 'g',
    O: 'o',
    o: 'O',
    5: 'T',
    T: '5',
    X: '@',
    '@': 'X',
    b: 'J',
    J: 'b',
    0: 'q',
    q: '0',
    V: '6',
    6: 'V',
    y: 'F',
    F: 'y',
    Y: 's',
    s: 'Y',
    7: '8',
    8: '7',
    S: 'z',
    z: 'S',
    '#': 'C',
    C: '#',
    t: 'R',
    R: 't',
    x: 'E',
    E: 'x',
    N: 'K',
    K: 'N',
    G: 'e',
    e: 'G',
    n: 'l',
    l: 'n',
    k: 'j',
    j: 'k',
    3: 'p',
    p: '3',
    9: 'm',
    m: '9',
    2: '1',
    1: '2',
    D: 'H',
    H: 'D',
    Z: 'Q',
    Q: 'Z',
    v: 'c',
    c: 'v',
    i: '%',
    '%': 'i',
    h: 'L',
    L: 'h',
    P: 'I',
    I: 'P',
    _: 'A',
    A: '_',
    U: '-',
    '-': 'U',
    r: '4',
    4: 'r',
    $: 'd',
    d: '$',
    '&': 'u',
    u: '&',
    f: 'W',
    W: 'f'
  },

  8: {
    f: '7',
    7: 'f',
    C: 'n',
    n: 'C',
    K: '9',
    9: 'K',
    5: 'S',
    S: '5',
    O: 'N',
    N: 'O',
    E: '8',
    8: 'E',
    y: 'F',
    F: 'y',
    w: '@',
    '@': 'w',
    h: 'Y',
    Y: 'h',
    B: 'b',
    b: 'B',
    W: 'T',
    T: 'W',
    J: 'P',
    P: 'J',
    m: '0',
    0: 'm',
    H: 'U',
    U: 'H',
    e: 'A',
    A: 'e',
    1: '4',
    4: '1',
    2: 'i',
    i: '2',
    $: 'd',
    d: '$',
    v: 'z',
    z: 'v',
    p: '%',
    '%': 'p',
    u: 'D',
    D: 'u',
    6: 'k',
    k: '6',
    R: 'c',
    c: 'R',
    t: 'g',
    g: 't',
    I: 'a',
    a: 'I',
    '#': 'G',
    G: '#',
    X: '!',
    '!': 'X',
    r: 'L',
    L: 'r',
    Q: 's',
    s: 'Q',
    x: 'M',
    M: 'x',
    j: 'o',
    o: 'j',
    3: 'l',
    l: '3',
    Z: '&',
    '&': 'Z',
    q: '_',
    _: 'q',
    V: '-',
    '-': 'V'
  },

  7: {
    '@': '0',
    0: '@',
    4: '&',
    '&': '4',
    8: 'z',
    z: '8',
    O: 'B',
    B: 'O',
    2: 'D',
    D: '2',
    L: '#',
    '#': 'L',
    $: 'n',
    n: '$',
    M: 'h',
    h: 'M',
    a: 'c',
    c: 'a',
    F: '%',
    '%': 'F',
    Q: 'R',
    R: 'Q',
    V: 'E',
    E: 'V',
    '-': '1',
    1: '-',
    k: '9',
    9: 'k',
    e: 'j',
    j: 'e',
    w: 'P',
    P: 'w',
    o: 'Y',
    Y: 'o',
    i: 'W',
    W: 'i',
    X: '_',
    _: 'X',
    r: 'K',
    K: 'r',
    J: 'p',
    p: 'J',
    N: 't',
    t: 'N',
    U: 'Z',
    Z: 'U',
    C: '7',
    7: 'C',
    v: 'G',
    G: 'v',
    H: 's',
    s: 'H',
    I: '6',
    6: 'I',
    A: '3',
    3: 'A',
    l: '5',
    5: 'l',
    u: 'T',
    T: 'u',
    x: 'd',
    d: 'x',
    f: 'S',
    S: 'f',
    '!': 'b',
    b: '!',
    q: 'm',
    m: 'q',
    g: 'y',
    y: 'g'
  },

  6: {
    a: '6',
    6: 'a',
    '@': 'q',
    q: '@',
    H: 'd',
    d: 'H',
    X: 'C',
    C: 'X',
    G: 'V',
    V: 'G',
    p: 'v',
    v: 'p',
    z: '#',
    '#': 'z',
    m: 'e',
    e: 'm',
    Z: 'K',
    K: 'Z',
    f: 'o',
    o: 'f',
    W: 'l',
    l: 'W',
    '%': 'x',
    x: '%',
    T: 't',
    t: 'T',
    A: 'n',
    n: 'A',
    I: 'L',
    L: 'I',
    $: '!',
    '!': '$',
    '-': '1',
    1: '-',
    N: 'k',
    k: 'N',
    9: 'c',
    c: '9',
    D: 'S',
    S: 'D',
    '&': 'P',
    P: '&',
    h: 'b',
    b: 'h',
    5: '4',
    4: '5',
    Y: 'O',
    O: 'Y',
    E: 'r',
    r: 'E',
    2: '0',
    0: '2',
    J: 'U',
    U: 'J',
    _: 'w',
    w: '_',
    7: 'B',
    B: '7',
    u: 'R',
    R: 'u',
    Q: 'g',
    g: 'Q',
    F: 'y',
    y: 'F',
    s: 'M',
    M: 's',
    3: 'i',
    i: '3',
    8: 'j',
    j: '8'
  },

  5: {
    '!': 'B',
    B: '!',
    c: 'd',
    d: 'c',
    E: '1',
    1: 'E',
    h: 'i',
    i: 'h',
    0: 'K',
    K: '0',
    b: 'u',
    u: 'b',
    P: 'Z',
    Z: 'P',
    A: 'F',
    F: 'A',
    '%': 'r',
    r: '%',
    e: '5',
    5: 'e',
    s: 'v',
    v: 's',
    U: 'j',
    j: 'U',
    T: 'w',
    w: 'T',
    6: 'g',
    g: '6',
    2: 'G',
    G: '2',
    S: 'R',
    R: 'S',
    t: 'O',
    O: 't',
    M: '#',
    '#': 'M',
    I: '&',
    '&': 'I',
    a: 'N',
    N: 'a',
    _: 'L',
    L: '_',
    m: 'Y',
    Y: 'm',
    3: '@',
    '@': '3',
    8: '7',
    7: '8',
    H: 'Q',
    Q: 'H',
    q: 'f',
    f: 'q',
    k: 'D',
    D: 'k',
    4: 'C',
    C: '4',
    n: 'y',
    y: 'n',
    9: 'p',
    p: '9',
    o: '$',
    $: 'o',
    '-': 'X',
    X: '-',
    x: 'V',
    V: 'x',
    W: 'z',
    z: 'W',
    J: 'l',
    l: 'J'
  },

  4: {
    B: 'P',
    P: 'B',
    1: 'V',
    V: '1',
    r: 'G',
    G: 'r',
    '!': 'J',
    J: '!',
    2: 'U',
    U: '2',
    c: 'm',
    m: 'c',
    5: '_',
    _: '5',
    y: 'k',
    k: 'y',
    $: '8',
    8: '$',
    F: 'L',
    L: 'F',
    7: 'f',
    f: '7',
    '#': 'n',
    n: '#',
    N: 'A',
    A: 'N',
    '%': 'H',
    H: '%',
    d: 'M',
    M: 'd',
    6: 'z',
    z: '6',
    T: 'q',
    q: 'T',
    C: 'w',
    w: 'C',
    Y: 'X',
    X: 'Y',
    a: 'x',
    x: 'a',
    '&': 'Q',
    Q: '&',
    p: 'j',
    j: 'p',
    '@': '3',
    3: '@',
    I: 'b',
    b: 'I',
    K: '9',
    9: 'K',
    Z: 'S',
    S: 'Z',
    4: 't',
    t: '4',
    W: '-',
    '-': 'W',
    0: 'e',
    e: '0',
    D: 'u',
    u: 'D',
    v: 'i',
    i: 'v',
    s: 'g',
    g: 's',
    o: 'h',
    h: 'o',
    E: 'l',
    l: 'E',
    R: 'O',
    O: 'R'
  },

  3: {
    $: 'p',
    p: '$',
    W: 'c',
    c: 'W',
    t: 'Y',
    Y: 't',
    O: 'L',
    L: 'O',
    '-': 'I',
    I: '-',
    9: 'v',
    v: '9',
    C: '%',
    '%': 'C',
    S: 'i',
    i: 'S',
    T: 'f',
    f: 'T',
    G: '#',
    '#': 'G',
    2: 'P',
    P: '2',
    j: 'B',
    B: 'j',
    F: 'H',
    H: 'F',
    z: 'R',
    R: 'z',
    7: 'X',
    X: '7',
    E: '_',
    _: 'E',
    3: '4',
    4: '3',
    s: 'm',
    m: 's',
    w: 'V',
    V: 'w',
    U: 'J',
    J: 'U',
    b: '6',
    6: 'b',
    k: 'D',
    D: 'k',
    Q: 'N',
    N: 'Q',
    o: 'h',
    h: 'o',
    r: 'e',
    e: 'r',
    Z: 'A',
    A: 'Z',
    1: 'x',
    x: '1',
    0: 'K',
    K: '0',
    M: '&',
    '&': 'M',
    a: 'y',
    y: 'a',
    8: 'l',
    l: '8',
    '@': 'g',
    g: '@',
    u: 'd',
    d: 'u',
    q: 'n',
    n: 'q',
    '!': '5',
    5: '!'
  },

  2: {
    _: 'Q',
    Q: '_',
    '@': 'K',
    K: '@',
    4: 'x',
    x: '4',
    0: 's',
    s: '0',
    J: 'S',
    S: 'J',
    y: 'L',
    L: 'y',
    O: 'P',
    P: 'O',
    B: 'C',
    C: 'B',
    N: 'q',
    q: 'N',
    G: '1',
    1: 'G',
    Z: 'r',
    r: 'Z',
    f: 'W',
    W: 'f',
    n: 'm',
    m: 'n',
    '!': 'A',
    A: '!',
    c: 'T',
    T: 'c',
    v: 'l',
    l: 'v',
    V: 'w',
    w: 'V',
    6: 'I',
    I: '6',
    5: 'R',
    R: '5',
    j: '9',
    9: 'j',
    X: 'U',
    U: 'X',
    E: 'a',
    a: 'E',
    o: '$',
    $: 'o',
    '#': '-',
    '-': '#',
    D: 'F',
    F: 'D',
    z: 'd',
    d: 'z',
    i: '2',
    2: 'i',
    e: 'g',
    g: 'e',
    '%': 'b',
    b: '%',
    3: '7',
    7: '3',
    Y: 't',
    t: 'Y',
    u: 'h',
    h: 'u',
    '&': 'p',
    p: '&',
    M: 'k',
    k: 'M',
    H: '8',
    8: 'H'
  },

  1: {
    E: '9',
    9: 'E',
    l: 'Y',
    Y: 'l',
    h: 'X',
    X: 'h',
    r: 'Z',
    Z: 'r',
    z: '&',
    '&': 'z',
    b: 'a',
    a: 'b',
    e: 'j',
    j: 'e',
    s: 'K',
    K: 's',
    x: 'V',
    V: 'x',
    g: 'U',
    U: 'g',
    H: '%',
    '%': 'H',
    $: 'T',
    T: '$',
    c: 'W',
    W: 'c',
    J: '2',
    2: 'J',
    '!': 'n',
    n: '!',
    v: '1',
    1: 'v',
    '-': 't',
    t: '-',
    A: '_',
    _: 'A',
    w: '6',
    6: 'w',
    3: 'C',
    C: '3',
    u: 'y',
    y: 'u',
    D: 'o',
    o: 'D',
    I: 'd',
    d: 'I',
    L: 'F',
    F: 'L',
    '#': 'q',
    q: '#',
    B: 'O',
    O: 'B',
    S: '0',
    0: 'S',
    5: 'G',
    G: '5',
    '@': 'p',
    p: '@',
    7: 'i',
    i: '7',
    M: 'k',
    k: 'M',
    N: 'R',
    R: 'N',
    f: 'P',
    P: 'f',
    m: '8',
    8: 'm',
    Q: '4',
    4: 'Q'
  }
}

const no_of_chars = Object.entries(toNumber).length
const max_config_value = no_of_chars - 1

function encrypt (message, config, scrambler_no) {
  let new_msg = ''
  let new_ltr = ''
  let new_ltr_index = 0

  for (let ltr of message) {
    if (!(ltr in toNumber)) {
      // If its not one of the 70 characters
      new_msg += ltr
      continue
    }

    new_ltr_index = (toNumber[ltr] - config + no_of_chars) % no_of_chars // Index of letter's encrypted version
    new_ltr = toLetter[new_ltr_index] // Get encrypted letter
    config = (config + 1) % no_of_chars // Increment config

    // scramble
    new_ltr = scramblers[scrambler_no][new_ltr]

    new_msg += new_ltr // concatenate
  }

  return new_msg
}

function decrypt (message, config, scrambler_no) {
  let new_msg = ''
  let new_ltr = ''
  let new_ltr_index = 0

  let ltr_to_decrypt = ''

  for (let ltr of message) {
    if (!(ltr in toNumber)) {
      new_msg += ltr
      continue
    }

    new_ltr = scramblers[scrambler_no][ltr]
    // scramblers also decrypt

    new_ltr_index = (toNumber[new_ltr] + config) % no_of_chars
    new_ltr = toLetter[new_ltr_index]

    config = (config + 1) % no_of_chars

    // concatenate
    new_msg += new_ltr
  }

  return new_msg
}