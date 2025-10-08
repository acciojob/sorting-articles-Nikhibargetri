//your JS code here. If required.
// Given array of band names
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

// Function to remove 'a', 'an', 'the' from beginning for sorting
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the array ignoring articles
const sortedBands = bands.sort((a, b) => {
  if (stripArticle(a) < stripArticle(b)) return -1;
  if (stripArticle(a) > stripArticle(b)) return 1;
  return 0;
});

// Render sorted list
