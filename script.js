const usernameForm = document.getElementById("usernameForm");
const usernameInput = document.getElementById("usernameInput");

const repoForm = document.getElementById("repoForm");
const repoSelect = document.getElementById("repoSelect");
const repoInput = document.getElementById("repoInput");
const defaultOption = document.getElementById("defaultOption");

const GITHUB_URL = (username) =>
  `https://api.github.com/users/${username}/repos`;

usernameForm.onsubmit = async (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  console.log(`username: [${username}]`);

  repoInput.required = false;
  repoInput.hidden = true;
  repoSelect.hidden = false;
  repoSelect.required = true;

  const response = await fetch(GITHUB_URL(username)).catch((err) =>
    console.log(
      "couldn't fetch the repositories, API unauthenticated quota might be reached.",
    ),
  );
  const data = await response.json();
  console.log("data:\n", JSON.stringify(data));

  generateOptions(data);
  defaultOption.remove();
};

repoForm.onsubmit = (event) => {
  event.preventDefault();
  const repoURL = repoSelect.value;
  alert(repoURL);
};

function generateOptions(data) {
  for (const repo of data) {
    const repoName = repo["full_name"];
    const repoURL = repo["html_url"];
    const repoOption = document.createElement("option");
    repoOption.textContent = repoName;
    repoOption.value = repoURL;
    repoSelect.appendChild(repoOption);
  }
}
