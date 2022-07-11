const getCloudContent = document.querySelector('.cloud__content');

const tagList = [
  'Governments',
  'Net',
  'Neutrality',
  'News',
  'Guides',
  'Governments',
  'Networking',
  'Open Source',
  'Privacy',
  'security',
  'bitcoin',
  'bittorrent',
  'irc',
  'news',
  'privacy',
  'programming',
  'security',
  'Copyright',
  'News',
  'Open Source',
  'Privacy',
];

let list = {};

function filterTags() {
  tagList.forEach((element) => {
    list[element.toLowerCase()] = (list[element.toLowerCase()] || 0) + 1;
  });
  return list;
}

filterTags();

function generateTagsList() {
  for (const [key, value] of Object.entries(list)) {
    const linkTag = document.createElement('a');
    linkTag.className = `tag-font-${value}`;
    linkTag.innerHTML = key;
    getCloudContent.appendChild(linkTag);
  }
}

generateTagsList();
