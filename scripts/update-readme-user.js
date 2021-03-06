const { readFileSync, writeFileSync } = require('fs');

// **************************************************************************

const users = [
  {
    name: 'UmiJS',
    url: 'https://umijs.org',
    logo:
      'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
  },
  {
    name: 'ahooks',
    url: 'https://ahooks.js.org/',
    logo: 'https://ahooks.js.org/logo.svg',
  },
  {
    name: 'Pro Components',
    url: 'https://procomponents.ant.design/',
    logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
  {
    name: 'react-component',
    url: 'https://github.com/react-component',
    logo: 'https://avatars3.githubusercontent.com/u/9441414?s=200&v=4',
  },
  {
    name: 'GGEditor',
    url: 'https://ggeditor.com',
    logo: 'https://img.alicdn.com/tfs/TB1FFA1CFP7gK0jSZFjXXc5aXXa-214-200.png',
  },
  {
    name: 'Remax',
    url: 'https://remaxjs.org',
    logo: 'https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ',
  },
  {
    name: 'LightProxy',
    url: 'https://lightproxy.org',
    logo:
      'https://user-images.githubusercontent.com/5436704/81533849-83e00f00-9399-11ea-943d-ac5fd4653906.png',
  },
  {
    name: 'juejin-cn',
    url: 'https://juejin-cn.github.io/open-source/',
    logo: 'https://avatars3.githubusercontent.com/u/69633008?s=200&v=4',
  },
  {
    name: 'issues-helper',
    url: 'https://actions-cool.github.io/issues-helper/',
    logo: 'https://avatars1.githubusercontent.com/u/73879334?s=200&v=4',
  },
  {
    name: 'alitajs',
    url: 'https://alitajs.com/',
    logo: 'https://user-images.githubusercontent.com/11746742/104428726-c2c90300-55bf-11eb-9b84-d52a86050b9a.png',
  },
  {
    name: 'Graphin',
    url: 'https://graphin.antv.vision/',
    logo: 'https://camo.githubusercontent.com/53886f0e306c9f01c96dee2edca3992830b7cbb769118029a7e5d677deb7e67e/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f616e7466696e63646e2f306234487a4f63454a592f4772617068696e2e737667',
  },
  {
    name: 'qiankun',
    url: 'https://qiankun.umijs.org/',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
  },
];

users.sort((a, b) => a.name.localeCompare(b.name));

// **************************************************************************

let table = '';
let row = users.length / 5;
const lastNo = users.length % 5;
if (lastNo !== 0) row += 1;
for (let j = 1; j <= row; j += 1) {
  let data = '';
  data = `
  <tr>
    <td width="160" align="center">${getShow(users[(j - 1) * 5])}
    </td>
    <td width="160" align="center">${getShow(users[(j - 1) * 5 + 1])}
    </td>
    <td width="160" align="center">${getShow(users[(j - 1) * 5 + 2])}
    </td>
    <td width="160" align="center">${getShow(users[(j - 1) * 5 + 3])}
    </td>
    <td width="160" align="center">${getShow(users[(j - 1) * 5 + 4])}
    </td>
  </tr>`;
  table += data;
}

table = `<table>
${table}
</table>

`;

// **************************************************************************

const pointBefore = '<table>';
const pointAfter = '### README Badge';

const readme = readFileSync('./packages/dumi/README.md', 'utf8');
const beforeIndex = readme.indexOf(pointBefore);
const afterIndex = readme.indexOf(pointAfter);
const readmeBefore = readme.substring(0, beforeIndex);
const readmeAfter = readme.substring(afterIndex, readme.length);

const newReadme = readmeBefore + table + readmeAfter;
writeFileSync('./packages/dumi/README.md', newReadme);
console.log(`🎉 Update readme user done!`);

// **************************************************************************

function getShow(o) {
  if (o) {
    return `
      <a target="_blank" href="${o.url}">
        <img src="${o.logo}" height="40" />
        <br />
        <strong>${o.name}</strong>
      </a>`;
  }
  return ``;
}

// **************************************************************************
