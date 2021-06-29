const arvish = require('arvish');

const items = [
    {
        title: 't1',
        subtitle: 't1',
        arg: 't1 ' + arvish.input,
        quicklookurl: 't1',
    },
    {
        title: 't2',
        subtitle: 't2',
        arg: 't2',
        quicklookurl: 't2',
    },
    {
        title: 't3',
        subtitle: 't3',
        arg: 't3',
        quicklookurl: 't3',
    }
];

arvish.output(arvish.inputMatches(items, 'title'));