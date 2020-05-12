import React from 'react';
import { useState } from 'react';
import { userActions } from  '../../actions/user.actions'
import { alertActions } from  '../../actions/alert.actions'
import { useDispatch, useSelector } from 'react-redux';

const Register =() => {
  const [inputs, setInputs] = useState({
    email:'',
    first_name:'',
    last_name:'',
    password:'',
    phoneNumber:''
  });
  const [sumbit, setSubmit] =  useState()
  const [comfirmPassword, setcomfirmPassword]=useState({})
  const dispatch = useDispatch();
/*   基本指派式
// const o = {p: 42, q: true};
// const {p, q} = o;

// console.log(p); // 42
console.log(q); // true 
*/ 

  function onRegister(e) {
    e.preventDefault();
    setSubmit(true);
    if (inputs.email && inputs.first_name && inputs.last_name && inputs.password && inputs.phoneNumber){
      if (comfirmPassword !==inputs.password){
        dispatch(alertActions.error('Please enter same password twice'))
      }else {
        dispatch(userActions.register(inputs))
      }
    }else{
      dispatch(alertActions.error('Please fill in all fields'))
    }
  }

  function onInputChange(event){
    const {name, value} = event.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">First Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="first_name"
                  id="first_name"
                  value={inputs.first_name}
                  onChange={e =>onInputChange(e)} required
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Last Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="text"
                  name="last_name"
                  id="last_name"
                  value={inputs.last_name}
                  onChange={e =>onInputChange(e)} required
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="email"
                  name="email"
                  id="email"
                  value={inputs.email}
                  onChange={e =>onInputChange(e)} required
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="phone">Phone Number</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100"
                  type="phone"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={inputs.phoneNumber}
                  onChange={e =>onInputChange(e)} required
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="password"
                  id="password"
                  value={inputs.password}
                  onChange={e =>onInputChange(e)} required
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Comfirm Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent w-100"
                  type="password"
                  name="comfirmPassword"
                  id="comfirmPassword"
                  onChange={e => setcomfirmPassword(e.target.value)} required
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
}

export default Register;