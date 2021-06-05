const autocompletes = [
  {
    key: '1234',
    short: 'tstom',
    snippet: 'tscli --adv rpoduction nanny config',
  },
  {
    key: '1235',
    short: 'tsngx',
    snippet: 'tscli --adv rpoduction ngnx config',
  },
  {
    key: '1244',
    short: 'custom',
    snippet: 'This is a custom text',
  },
];

export const getMatchingResponse = (str: string) => {
  return autocompletes;
};
