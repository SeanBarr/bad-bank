import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function useUserContext(){
    return useContext(UserContext);
}

function ContextProvider({ children }){
    const [userLogIn, setUserLogIn] = useState(null);
    const [userList, setUserList] = useState([]);
    
    const signup = (name, email, password) => {
        let users = userList 
        let user = { id: userList.length + 1, name: name, email: email, password: password, balance: 0, isLoggedIn: false}
        setUserList([...users, user]);
    };
    const logIn = (email, password) => {
        let allUsers = userList 
        let newUserList = allUsers.map(user => {
            if(user.email === email && user.password === password){
                user.isLoggedIn = true; 
            return user; 
            }
            else return user; 
        });
        setUserList(newUserList);
        let user = newUserList.filter(user => user.isLoggedIn === true)[0]
        setUserLogIn(user); 
    };
    const logOut = () => {
        let allUsers = userList 
        let newUserList = allUsers.map(user => {
            if(user.id === userLogIn.id){
                user.isLoggedIn = false;
                return user;
            } 
            else return user; 
        })
        setUserList(newUserList);
        setUserLogIn(null);
    };
    const updateUserBalance = (id, newBalance) => {
        let allUsers = userList
        let newUserList = allUsers.map(user => {
        if(user.id === id) {
        user.balance = newBalance
        console.log('this is the user', user);
        return user; 
        }
        else return user;
        })
        setUserList(newUserList);
        let user = newUserList.filter(user => user.id === id)[0];
        setUserLogIn(user);
    };

    const contextValue = { 
        logIn, 
        logOut, 
        signup, 
        updateUserBalance, 
        userList, 
        userLogIn 
    }

    return (
        <UserContext.Provider value={contextValue}>
            { children }
        </UserContext.Provider>
    )
};
export { ContextProvider, useUserContext };