// const heading = React.createElement("h1",{id:"main"},"hello aish react");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//nested structure

const parent = React.createElement("div",
{id:"parent"},
React.createElement("div",{id:"child"},React.createElement("h1",{},"iam child"))
);
root.render(parent);
