// Poems shown in the "Poetry" section on the home page.
// Edit this file, not the component. While `poems` is empty the section shows
// only the placeholder line.

export type Poem = {
  /** Original title. */
  zh: string;
  /** English title, when the poem has one. */
  en?: string;
  url: string;
};

export const poetry = {
  /** One line under the heading, shown when poems are listed. */
  intro: 'Poems in Chinese, with English versions.',
  /** Shown instead of the list while it is empty. */
  placeholder: 'A selection of poems will be listed here.',
  /** Optional link under the list, e.g. to where the poems are published. */
  moreUrl: undefined as string | undefined,
  moreLabel: 'All poems',
  poems: [] as Poem[],
};
