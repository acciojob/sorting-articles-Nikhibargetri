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

// Function to strip 'a', 'an', 'the' from sorting
function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands ignoring 'a', 'an', 'the'
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

// Add them to the HTML
const ul = document.queryta("bands");

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
