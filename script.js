const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to remove 'A', 'An', 'The' from start of titles for sorting
function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring 'A', 'An', 'The'
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Display sorted list in the UL
document.getElementById('band').innerHTML = 
  sortedBands.map(band => `<li>${band}</li>`).join('');
