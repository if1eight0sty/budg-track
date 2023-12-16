export class AuthHelper {
  checkLoginData = (data) => {
    let error = {};
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    return error;
  };

  checkRegisterData = (data) => {
    let error = {};
    error.email = !data.email ? "Email is required" : "";
    error.password = !data.password ? "Password is required" : "";
    error.name = !data.name ? "Name is required" : "";
    return error;
  };

  login = (data, setError, navigate) => {
    const error = this.checkLoginData(data);
    if (error.email || error.password) {
      setError(error);
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === data.email);
    if (!user) {
      setError({ email: "Email does not exists" });
      return;
    }
    if (user.password !== data.password) {
      setError({ password: "Password is incorrect" });
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };
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
