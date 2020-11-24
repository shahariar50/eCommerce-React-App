import React, {useState} from 'react';
import * as Styled from './styled';

const Login: React.FC = () => {
    const [userName, setUserName] = useState("");

    const onSubmitHandler = () => {

    }

    const onChangeHandler = () => {

    };

    return (
        <Styled.LoginContainer style={{marginTop: "10%"}}>
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
            <label className="form-label">Password</label>
            <input type="email" placeholder="Enter Password" className="form-input"/>
            <div className="form-background"></div>
          </div>
        </div>
        <input type="submit" className="form-button" value="Login" />
      </form>
    </div>
</div>
           
        </Styled.LoginContainer>
    )
};

export default Login;