class AuthService {
  static getUser() {
    if (typeof window === "undefined") {
      return null;
    }

    const user = localStorage.getItem("adminUser");

    if (!user) {
      return null;
    }

    try {
      return JSON.parse(user);
    } catch (error) {
      console.error("Invalid user data in localStorage:", error);
      return null;
    }
  }

  static getUserId() {
    const user = this.getUser();
    return user?.id || null;
  }
}

export default AuthService;