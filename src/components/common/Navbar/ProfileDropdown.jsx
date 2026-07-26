import "./ProfileDropdown.css";

function ProfileDropdown({
  user,
  handleLogout,
  showDropdown,
}) {
  if (!showDropdown) return null;

  const displayName =
    user?.role === "candidate"
      ? user?.full_name
      : user?.hr_name || user?.company_name;

  return (
    <div className="nav-dropdown">
      <div className="nav-dropdown-info">
        <h4>{displayName}</h4>
        <p>{user?.email}</p>
      </div>

      <button
        className="nav-dropdown-logout"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileDropdown;