export default interface IUserProfile {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    password: string;
    confirmPassword: string;
    contactNo: number;
    address: string;
    pincode: number;
    state: string;
    country: string;
    landmark: string;
    profilePic: string
};

export default interface ILogoutState {
    username: string;
    logoutTime: string;
}
