console.log(
  JSON.stringify(
    {
      items: [
        {
          title: "t1",
          subtitle: "subtitle",
          arg: process.argv[2],
        },
        {
          title: "t2",
          subtitle: "subtitle",
          arg: process.argv[2],
        },
        {
          title: "t3",
          subtitle: "subtitle",
          arg: process.argv[2],
        },
        {
          title: "t4",
          subtitle: "subtitle",
          arg: process.argv[2],
        },
      ],
      variables: {},
    },
    null,
    "\t"
  )
);
