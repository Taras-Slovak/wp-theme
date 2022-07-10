// const getCloudContent = document.querySelector('.cloud__content');

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

// function createTagElement(text = 'some') {
//   let list = [];
//   const tag = document.createElement('a');
//   tag.className = 'cloud__tag';
//   tagList.forEach((item) => {
//     if (text.toLowerCase() == item.toLowerCase()) {
//       // tag.classList.add('tag-small');
//       console.log(text);
//     }
//   });

//   tag.innerText = text.toLowerCase();
//   return tag;
// }

// function generateTags() {
//   tagList.map((tag) => {
//     getCloudContent.append(createTagElement(tag));
//   });
// }

// generateTags();
// console.log(getCloudContent);
let list = {};

function filterTags() {
  tagList.forEach((element) => {
    list[element.toLowerCase()] = (list[element.toLowerCase()] || 0) + 1;
  });

  return list;
}
filterTags();
// console.log(filterTags());

for (let i in list) {
  console.log(list[i]);
}
