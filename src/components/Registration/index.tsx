import React, { useState } from 'react';
import * as Styled from './styled';
import IUserProfile from '../../interfaces/IUserProfile';
import {registerUserService} from '../../services/userService';
import {useStoreContext} from '../../store/index'

const Registration: React.FC = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onhandleChange = (e: any) => {
        switch(e.target.name){
            case username:
                setUsername(e.target.value)
                break;
            case email:
                setEmail(e.target.value)
                break;
            case password:
                setPassword(e.target.value)
                break;
        }
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
       /*  registerUserService({
            username, email, password
        }, setContextState) */
   

    };

    return (
        <Styled.RegistrationContainer>
            <div className="row" style={{marginTop: "6%"}}>
             {/*    <Styled.Form>

        <form onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-element">
                <label htmlFor="username">Username</label>
                <input type="text" id="username"
                    name="username"
                    onChange={onhandleChange}
                />
            </div>
            <div className="form-element">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                    name="email"
                    onChange={onhandleChange}
                />
            </div>
            <div className="form-element">
                <label htmlFor="password">Password</label>
                <input type="password"
                    id="password"
                    name="password"
                    onChange={onhandleChange}
                />
            </div>
            <br/>
            <div className="form-element">
            <input type="submit" id="registrationform" name-="registrationform" value="Submit" /> <br />
            </div>
        </form>
                  
                </Styled.Form>
                <Styled.Content>
                    <p>Register Now and Get 20% Discount Coupon!!</p>
                </Styled.Content>
 */}

<div className="wrap">
  <div className="form">
      <form method="post">
        <div className="form-area">
          <div className="form-list">
            <label className="form-label">Username</label>
            <input type="text" placeholder="Enter Username" className="form-input"/>
            <div className="form-background"></div>
          </div>
          <div className="form-list">
            <label className="form-label">Email</label>
            <input type="email" placeholder="Enter Email Address" className="form-input"/>
            <div className="form-background"></div>
          </div>
          <div className="form-list">
            <label className="form-label">Password</label>
            <input type="email" placeholder="Enter Password" className="form-input"/>
            <div className="form-background"></div>
          </div>
          <div className="form-list">
            <label className="form-label">Confirm Password</label>
            <input type="email" placeholder="Re-Enter Password" className="form-input"/>
            <div className="form-background"></div>
          </div>
        </div>
        <input type="submit" className="form-button" value="Register" />
      </form>
    </div>
</div>
            </div>

        </Styled.RegistrationContainer>
    )
};
export default Registration;