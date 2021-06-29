const arvish = require('arvish');

const items = [
    {
        title: 't1',
        subtitle: 't1',
        arg: arvish.input,
        quicklookurl: 't1',
    },
    {
        title: 't2',
        subtitle: 't2',
        arg: arvish.input,
        quicklookurl: 't2',
    },
    {
        title: 't3',
        subtitle: 't3',
        arg: arvish.input,
        quicklookurl: 't3',
    }
];

arvish.output(arvish.inputMatches(items, 'title'));