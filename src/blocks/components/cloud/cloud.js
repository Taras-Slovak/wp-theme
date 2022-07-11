const getCloudContent = document.querySelector('.cloud__content');

const tagList = [
  'Governments',
  'Net',
  'Neutrality',
  'ukraine',
  'News',
  'Guides',
  'Governments',
  'ukraine',
  'Networking',
  'Open Source',
  'Privacy',
  'security',
  'ukraine',
  'bitcoin',
  'bittorrent',
  'ukraine',
  'irc',
  'news',
  'privacy',
  'programming',
  'security',
  'Copyright',
  'war',
  'News',
  'Open Source',
  'Privacy',
  'Facebook',
  'war',
  'google',
  'kingdom',
  'china',
  'surveillance',
  'war',
  'amazon',
  'twitter',
  'apple',
  'samsung',
  'china',
  'surveillance',
  'amazon',
  'twitter',
  'apple',
  'samsung',
  'ukraine',
  'war',
  'wpn',
  'administration',
  'oil',
  'clay',
  'chemistry',
  'communication',
  'activity',
  'restaurant',
  'perspective',
  'bath',
  'editor',
  'guidance',
  'bread',
  'role',
  'actor',
  'wedding',
  'writer',
  'statement',
  'family',
  'grandmother',
  'indication',
  'member',
  'variety',
  'winner',
  'family',
  'grandmother',
  'indication',
  'member',
  'variety',
  'winner',
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
    linkTag.classList.add(`font-${value}`);
    linkTag.href = '#';
    linkTag.innerHTML = key;
    getCloudContent.appendChild(linkTag);
  }
}

generateTagsList();
