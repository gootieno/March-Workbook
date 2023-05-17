let UPVOTE = 0;
let DOWNVOTE = 0;

export const createVotesContainer = () => {
  // create or select
  const votesContainer = document.createElement("section");

  // styles or manipulation
  votesContainer.setAttribute("id", "votes-container");

  // append to dom
  document.body.appendChild(votesContainer);
  createPopularityScore();
  createVoteButtonsContainer();

  // event listeners
  handleUpVote();
};

const createPopularityScore = () => {
  const popularityScore = document.createElement("p");
  const votesContainer = document.getElementById("votes-container");

  popularityScore.setAttribute("id", "score");
  popularityScore.innerText = "Popularity Score: 0";

  votesContainer.appendChild(popularityScore);
};

const createVoteButtonsContainer = () => {
  const voteButtonsContainer = document.createElement("div");
  const votesContainer = document.getElementById("votes-container");

  voteButtonsContainer.setAttribute("id", "vote-buttons-container");

  const { upVote, downVote } = createVoteButtons();
  voteButtonsContainer.append(upVote, downVote);
  votesContainer.appendChild(voteButtonsContainer);
};

const createVoteButtons = () => {
  const upVote = document.createElement("button");
  const downVote = document.createElement("button");

  upVote.setAttribute("id", "upvote");
  upVote.style.cursor = "pointer";
  upVote.style.width = "100px";
  upVote.style.marginRight = "10px";

  downVote.setAttribute("id", "downvote");
  downVote.style.cursor = "pointer";
  downVote.style.width = "100px";

  upVote.innerText = "upvote";
  downVote.innerText = "downvote";

  return { upVote, downVote };
};

const handleUpVote = () => {
  const score = document.getElementById("score");
  const upVote = document.getElementById("upvote");

  upVote.addEventListener("click", () => {
    UPVOTE += 1;
    score.innerText = `Popularity Score: ${UPVOTE}`;
  });
};
