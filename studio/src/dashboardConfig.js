export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6321d12c46eae81f52cdb27a",
                  title: "Sanity Studio",
                  name: "airbnb-with-sanity-studio",
                  apiId: "36d85062-2a16-4c7b-8ad0-bf1b1fc64a50",
                },
                {
                  buildHookId: "6321d12ce252402254fb9004",
                  title: "Blog Website",
                  name: "airbnb-with-sanity",
                  apiId: "6c74986d-eb6f-4fbc-849c-dcc70c9bebab",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/9Abdurrahman2020/airbnb-with-sanity",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://airbnb-with-sanity.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
