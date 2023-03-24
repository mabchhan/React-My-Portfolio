import Project from "../Project";

function Portfolio() {
  const projects = [
    {
      name: "Text-Editor-PWA",
      //description: 'MERN Stack',
      link: "https://shielded-cove-26932.herokuapp.com/",
      repo: "https://github.com/mabchhan/Text-Editor-PWA",
    },
    {
      name: "Note-Taker",
      //description: 'MERN Stack',
      link: "https://infinite-beach-44513.herokuapp.com/",
      repo: "https://github.com/mabchhan/Note-Taker",
    },
    {
      name: "The-Blog",
      //description: 'MERN Stack',
      link: "https://desolate-reaches-65824.herokuapp.com/",
      repo: "https://github.com/mabchhan/The-Blog",
    },
    {
      name: "Weather-Dashboard",
      //description: 'MERN Stack',
      link: "https://mabchhan.github.io/weather-dashboard/",
      repo: "https://github.com/mabchhan/weather-dashboard",
    },
    {
      name: "Coding-Quiz",
      //description: 'MERN Stack',
      link: "https://mabchhan.github.io/Coding-Quiz/",
      repo: "https://github.com/mabchhan/Coding-Quiz",
    },
  ];
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
        {projects.map((project) => (
          <Project props={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
