import "../styles/login.css"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

export function Login(){
    return(
        <div className="login-container">
            <div className="login-form">
                <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt="" />
                <button>
                    <div className="form-button">
                    <GoogleIcon />
                    <span className="form-button-text">Login with google</span>
                    </div>
                </button>
                <button>
                    <div className="form-button">
                    <GitHubIcon />
                    <span className="form-button-text">Login with Github</span>
                    </div>
                </button>
                <button style={{marginBottom : "20px"}}>
                    <div className="form-button">
                    <FacebookIcon />
                    <span className="form-button-text">Login with google</span>
                    </div>
                </button>
               
               <div className="input-groups">
                   <div className="input-group">
                       <label className="input-label" >Email</label>
                       <input className="input" type="email" />
                   </div>
               </div>
               <div className="input-groups" >
                   <div className="input-group">
                       <div  className="label-forgot-password" >
                           <label className="input-label" >Password</label>
                           <div className="forgot-password">forgot password?</div>
                       </div>
                       <input className="input" type="password" />
                   </div>
               </div>

               <button  className="login-button">Login</button>
               
               

            </div>

        </div>
    )
}