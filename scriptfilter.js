console.log(
  JSON.stringify(
    {
      items: [
        {
          title: "scriptfilter item 1",
          subtitle: "subtitle 1",
          arg: process.argv[2],
          mods: {
            ctrl: {
              title: 'pressed ctrl',
              subtitle: 'pressed ctrl subtitle'
            },
          },
          quicklookurl: 'https://www.google.com/'
        },
        {
          title: "scriptfilter item 2",
          subtitle: "subtitle 2",
          arg: process.argv[2],
        },
        {
          title: "scriptfilter item 3",
          subtitle: "subtitle 3",
          arg: process.argv[2],
        },
        {
          title: "scriptfilter item 4",
          subtitle: "subtitle 4",
          arg: process.argv[2],
        },
      ],
      variables: {},
    },
    null,
    "\t"
  )
);
