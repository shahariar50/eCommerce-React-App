const isAuthenticated = (): boolean => !!localStorage.getItem('token');

export default isAuthenticated;
