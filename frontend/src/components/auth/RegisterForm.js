import React, {useState} from "react";

function RegisterForm({onSubmit}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h3 className="card-title">Sign up</h3>
                <div>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value) }
                            placeholder="Name"/>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }
                            className="form-control"
                            placeholder="Email"/>
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="form-control" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button 
                            className="btn btn-danger"
                            onClick={e => onSubmit({name, email, password})}>
                            Create account
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RegisterForm;