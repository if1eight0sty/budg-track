/**
 * Helper class for authentication related operations.
 */
export class AuthHelper {
  /**
   * Checks the login data for any missing fields.
   * @param {Object} data - The login data object.
   * @returns {Object} - An object containing error messages for missing fields.
   */
  checkLoginData = (data) => {
    let error = {};
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    return error;
  };

  /**
   * Checks the register data for any missing fields.
   * @param {Object} data - The register data object.
   * @returns {Object} - An object containing error messages for missing fields.
   */
  checkRegisterData = (data) => {
    let error = {};
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    error.name = !data.name ? "Name is required" : "";
    return error;
  };

  /**
   * Performs the login operation.
   * @param {Object} data - The login data object.
   * @param {Function} setError - The function to set the error state.
   * @param {Function} navigate - The function to navigate to a different page.
   */
  login = (data, setError, navigate) => {
    const error = this.checkLoginData(data);
    if (error.email || error.password) {
      setError(error);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === data.email);
    if (!user) {
      setError({ email: "Email does not exist" });
      return;
    }
    if (user.password !== data.password) {
      setError({ password: "Password is incorrect" });
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  /**
   * Performs the register operation.
   * @param {Object} data - The register data object.
   * @param {Function} setError - The function to set the error state.
   * @param {Function} navigate - The function to navigate to a different page.
   */
  register = (data, setError, navigate) => {
    const error = this.checkRegisterData(data);
    if (error.email || error.password || error.name) {
      setError(error);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === data.email);
    if (user) {
      setError({ email: "Email already exists" });
      return;
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };
}
