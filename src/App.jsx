import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Auth0 Implementation</h1>
      {user ? (
        <>
          <div>
            Hello <span style={{ color: "brown" }}>{user.name}</span>, How are
            you doing?
          </div>
          <div style={{ marginTop: "20px" }}>
            Click the button below to logout.
          </div>
          <button
            onClick={() => {
              logout();
            }}
            style={{ marginTop: "20px" }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <div>Login with you email-id or your social accounts.</div>
          <button
            onClick={() => {
              loginWithRedirect();
            }}
            style={{ marginTop: "20px" }}
          >
            Login
          </button>
        </>
      )}
    </>
  );
}

export default App;
