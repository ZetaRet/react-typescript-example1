import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router";
import { tableActions } from "./slices";
import { useDispatch } from "react-redux";

export function LoginForm() {
	const formRef = useRef(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	async function onSubmit(e: FormEvent) {
		e.preventDefault();
		/* await Authenticate Username/Password on backend, server validation, assume success */
		dispatch(tableActions.setLogin({ username: (formRef.current as any).username }));
		navigate("/table/0");
	}

	return (
		<div>
			<h2>Login Form</h2>
			<div className="login">
				<form ref={formRef} className="form-login" onSubmit={onSubmit}>
					<input type="text" name="username" placeholder="Username" minLength={4} maxLength={30} required />
					<br />
					<input
						type="password"
						name="password"
						placeholder="Password"
						minLength={4}
						maxLength={30}
						required
					/>
					<br />
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
}
