function first(array, n) {
  if (!Array.isArray(array) || array.length === 0) return [];

  if (n === undefined) {
    return array[0];
  }

  if (n < 0) {
    return [];
  }

  return array.slice(0, n);
}

// Collect outputs
let output = '';
output += first([7, 9, 0, -2]) + '\n';
output += JSON.stringify(first([], 3)) + '\n';
output += JSON.stringify(first([7, 9, 0, -2], 3)) + '\n';
output += JSON.stringify(first([7, 9, 0, -2], 6)) + '\n';
output += JSON.stringify(first([7, 9, 0, -2], -3)) + '\n';

// Display in the browser
document.getElementById('output').textContent = output;
