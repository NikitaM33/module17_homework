export function multiply(a, b) {
  return a * b;
}

export function revertStr(str) {
  str = str.split('').reverse().join('');
  return str;
}

export function getPercents(percent, number) {
  if(typeof percent === 'number') {
    return `${percent}% от ${number} = ${number * percent / 100}`;
  } else if (typeof percent === 'string') {
    return `${percent} is not a number`;
  } else {
    return `Can\`t count ${percent}%`;
  }
}
