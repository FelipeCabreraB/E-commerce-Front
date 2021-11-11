import "./LostPassword.css";

function LostPassword() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div id="lost-password-container" className="px-2">
          <p className=" mt-5">
            Lost your password? Please enter your username or email and you will
            receive a link to create a new one.
          </p>
          <form>
            <label
              htmlFor="usernameForLostPassword"
              className="form-label"
              style={{ fontSize: "0.8rem" }}
            >
              Username or email *
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameForLostPassword"
            />
            <button
              type="button"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "12px",
                width: "100%",
              }}
              className="btn rounded-pill mt-5 px-5 py-2 mb-5"
            >
              RECOVER PASSWORD
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LostPassword;
