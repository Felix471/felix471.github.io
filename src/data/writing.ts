// Selected writing, shown in the "Writing" section on the home page.
// Edit this file, not the component.

export type WritingEntry = {
  title: string;
  /** One line. */
  description: string;
  url: string;
  /** ISO date, e.g. "2026-03-14". Optional; dated entries sort newest first, undated ones follow. */
  date?: string;
  /** Only "zh" is shown as a tag; "en" is the default and not tagged. */
  lang: 'en' | 'zh';
};

export const writing = {
  /** Where "More on Medium" points, and the profile behind the "Writing" link. */
  profileUrl: 'https://medium.com/@felixwangshigiou',
  /** One-line intro under the heading. */
  intro: 'Lorem ipsum notes on tools, data and the occasional detour. Placeholder text, to be replaced.',
  entries: [
    {
      title: 'Replaying production traffic without leaking it',
      description: 'How Retrace redacts request bodies before they ever leave the cluster.',
      url: 'https://medium.com/@felixwangshigiou',
      date: '2026-06-02',
      lang: 'en',
    },
    {
      title: '为什么我不再信任聊天界面',
      description: '一篇关于检索式问答系统中引用与置信度的短文。',
      url: 'https://medium.com/@felixwangshigiou',
      date: '2026-02-18',
      lang: 'zh',
    },
    {
      title: 'Hidden-role games as an evaluation harness',
      description: 'Lorem ipsum dolor sit amet: what Avalon reveals about long-horizon consistency.',
      url: 'https://medium.com/@felixwangshigiou',
      lang: 'en',
    },
  ] satisfies WritingEntry[],
};
