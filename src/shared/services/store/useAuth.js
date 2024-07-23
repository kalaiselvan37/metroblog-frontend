import { create } from 'zustand';

const tokenname = "Metroblog2024";

const useAuth = create((set) => ({
  isLoggedIn: !!localStorage.getItem(tokenname),

  login: (token) => {
    localStorage.setItem(tokenname, token);
    set({ isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem(tokenname);
    set({ isLoggedIn: false, user: null });
  },

  userdetails: () => {
    const token = localStorage.getItem(tokenname);
    if (token) {
      try {
        const decodedToken = JSON.parse(window.atob(token.split('.')[1]));
        console.log('Decoded Token:', decodedToken);
        return decodedToken.data;
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  },
}));

export default useAuth;
