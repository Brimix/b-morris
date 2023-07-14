import './LinksBrief.scss';

const LinksBrief = () => {
  const onGithubClick = () => {
    window.location.href = "https://github.com/Brimix";
  }

  const onResumeClick = () => {
    console.log('Not yet implemented! Lol');
  }

  return (
    <div className="links-brief">
      <p> Site in development... </p>
      <div>
        Check out my work
        <button onClick={onGithubClick}> Github </button>
      </div>
      <div>
        Download my resume
        <button onClick={onResumeClick}> Resume </button>
      </div>
    </div>
  );
};

export default LinksBrief;