
const UserData = (function () {
    let userId = "";
    let firstName = "";
    let lastName = "";
    let accessType = "";

    const getName = function () {
        if (firstName == "" && lastName == "") {
            firstName = localStorage.getItem("firstName") ?? "";
            lastName = localStorage.getItem("lastName") ?? "";
        }
        return firstName + " " + lastName;
    };

    const setName = function (fName: string, lName: string) {
        firstName = fName;
        lastName = lName
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
    };

    const getUserId = function () {
        if (userId == "") {
            userId = localStorage.getItem("userId") ?? "";
        }
        return userId;
    }
    const setUserId = function (uId: string) {
        userId = uId;
        localStorage.setItem("userId", userId);
    }
    const getAccessType = function () {
        if (accessType == "") {
            accessType = localStorage.getItem("accessType") ?? "";
        }
        return accessType;
    }
    const setAccessType = function (aType: string) {
        accessType = aType;
        localStorage.setItem("accessType", accessType);
    }
    const logout = function () {
        localStorage.clear();
        userId = "";
        firstName = "";
        lastName = "";
        accessType = "";
    }

    const isLoggedIn = function () {
        console.log(localStorage.getItem("userId"));
        if (getUserId() != null && getUserId() != "")
            return true;
        else return false;

    }
    return {
        getName: getName,
        setName: setName,
        getUserId: getUserId,
        setUserId: setUserId,
        getAccessType: getAccessType,
        setAccessType: setAccessType,
        logout: logout,
        isLoggedIn: isLoggedIn
    }
})();

export default UserData;