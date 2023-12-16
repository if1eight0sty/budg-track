export class CheckAuthClass {
  checkAuth = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return false;
    }
    return true;
  };
}
