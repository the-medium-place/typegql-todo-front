// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';

// create a new class to instantiate for a user
class AuthService {
  // get user data from JSON web token by decoding it
  getProfile() {
    return decode(this.getToken());
  }

  // return `true` or `false` if user logged in / not logged in
  loggedIn() {
    const token = this.getToken();
    if (!token) return false;
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
  }

  login(auth) {
    console.log({ auth })
    // Saves user token to localStorage and reloads the application for logged in status to take effect
    localStorage.setItem('id_token', auth.createUser?.token || auth.loginUser.token);
    window.location.assign(`/user/${auth.createUser?.user.username || auth.loginUser.user.username}`);
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
