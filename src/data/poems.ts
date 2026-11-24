// Poems shown in the "Poetry" section on the home page.
// Edit this file, not the component. Leave `poems` empty to hide the section.

export type Poem = {
  /** Original title. */
  zh: string;
  /** English title, when the poem has one. */
  en?: string;
  url: string;
};

export const poetry = {
  /** Where "All poems on Medium" points. */
  profileUrl: 'https://medium.com/@felixwangshigiou',
  /** One line under the heading. */
  intro: 'Poems in Chinese, published on Medium.',
  poems: [
    {
      zh: '潮湿的病例（组诗九首）',
      en: 'Damp Case Histories: Nine Poems',
      url: 'https://medium.com/@felixwangshigiou/%E6%BD%AE%E6%B9%BF%E7%9A%84%E7%97%85%E4%BE%8B-%E7%BB%84%E8%AF%97%E4%B9%9D%E9%A6%96-damp-case-histories-nine-poems-4ca421504a7c',
    },
    {
      zh: '小红书教给我的精神病理诊断',
      en: 'Psychopathological Diagnosis, as Taught by Social Media',
      url: 'https://medium.com/@felixwangshigiou/%E5%B0%8F%E7%BA%A2%E4%B9%A6%E6%95%99%E7%BB%99%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E7%97%85%E7%90%86%E8%AF%8A%E6%96%AD-0da32577a4a3',
    },
    {
      zh: '牙菌斑',
      url: 'https://medium.com/@felixwangshigiou/%E7%89%99%E8%8F%8C%E6%96%91-6557b6303da6',
    },
    {
      zh: '无题，或者一滴眼泪的成分',
      en: 'Untitled, or the Composition of a Teardrop',
      url: 'https://medium.com/@felixwangshigiou/%E6%97%A0%E9%A2%98-%E6%88%96%E8%80%85%E4%B8%80%E6%BB%B4%E7%9C%BC%E6%B3%AA%E7%9A%84%E6%88%90%E5%88%86-25e77b796b2a',
    },
    {
      zh: '逃走的梦',
      en: 'The Dream That Fled',
      url: 'https://medium.com/@felixwangshigiou/%E9%80%83%E8%B5%B0%E7%9A%84%E6%A2%A6-62c8c5ca0bb9',
    },
    {
      zh: '好梦',
      en: 'Good Dreams',
      url: 'https://medium.com/@felixwangshigiou/%E5%A5%BD%E6%A2%A6-af26d407c564',
    },
  ] satisfies Poem[],
};
