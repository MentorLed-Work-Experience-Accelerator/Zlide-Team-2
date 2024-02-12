import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfocircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome } from '@fortawesome/react.fontawesome';
import axios from './api/axios';

// defining regular expressions for password validation;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/register';

// defining the for Register function
const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    
    // defining useState hooks
    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // defining useEffect functions
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user,  pwd, matchPwd])
    
    // assigning the function that will prevent the page from reloading to a variable
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const u1 = USER_REGEX.test(user);
        const u2 = PWD_REGEX.test(pwd);
        if (!u1 || !u2) {
            setErrMsg('Invalid Entry')
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, 
                JSON.stringify({ user, pwd }), 
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
                );
                // PS: remember to remove console.logs before deployment
                console.log(JSON.stringify(response?.data));
                // console.log(JSON.stringify(response))
                setSuccess(true);
                // clear state and controlled inputs
                setUser('');
                setPwd('');
                setMatchPwd;
            } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }
    
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                        </label>
                        <input 
                            type="text"
                            id="username"
                            ref={useRef}
                            autoComplete="off"
                            onChange={(evt) => setUser(evt.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}  
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : offscreen}>
                            <FontAwesome icon={faInfocircle} />
                            4 to 24 characters. <br />
                            Must begin with a letter. <br />
                            Letters, numbers, underscores and hyphens are allowed 
                        </p>
                    </form>
                </section>
            )
        }
        </>
    )

}

    
    