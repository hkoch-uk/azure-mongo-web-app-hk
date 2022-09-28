import React from "react"

function Register() {

  var memberOption; 

  function handleClick(e) {
    memberOption = e.target.value
    console.log(memberOption)
  }


    return<>
<div class="box">
  Explain memberships/info
  Individual child register is after signing up as school
</div>

<div class="field">
  <label class="label">Type</label>
  <div class="control">
    <div class="select" >
      <select onChange={(choice) => handleClick(choice)}>
        <option id="buddy">Buddy</option>
        <option id="school">School</option>
        <option id="sponsor">Sponsor</option>
      </select>
    </div>
  </div>
</div>

  <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Full Name" /> 
  </div>
</div>
<div class="field">
  <label class="label">Address</label>
  <div class="control">
    <input class="input" type="text" placeholder="Address" /> 
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email address" /> 
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  {/* <p class="help is-danger">This email is invalid</p> */}
</div>
<div class="field">
  <label class="label">Contact Number</label>
  <div class="control">
    <input class="input" type="text" placeholder="Contact Number" /> 
  </div>
</div>

{/* buddy only */}

  <div class="field">
  <label class="label">Occupation</label>
  <div class="control">
    <textarea class="textarea" placeholder="Occupation"></textarea>
  </div>
</div>

<div class="field">
  <label class="label">Interests (Control and click up to 3 options)</label>
  <div class="control">
    <div class="select is-multiple">
      <select multiple size="3">
        <option>Sports</option>
        <option>Arts and Crafts</option>
        <option>TV and Film</option>
        <option>Reading</option>
        <option>Outdoors</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox" />  
      I agree to the <a href="#">sending a letter twice a term</a>
    </label>
  </div>
</div>
  

<div class="field">
  <label class="label">Occupation</label>
  <div class="control">
    <textarea class="textarea" placeholder="Occupation"></textarea>
  </div>
</div>

<div class="field">
  <label class="label">Interests (Control and click up to 3 options)</label>
  <div class="control">
    <div class="select is-multiple">
      <select multiple size="3">
        <option>Sports</option>
        <option>Arts and Crafts</option>
        <option>TV and Film</option>
        <option>Reading</option>
        <option>Outdoors</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox" />  
      I agree to the <a href="#">sending a letter twice a term</a>
    </label>
  </div>
</div>

{/* school only */}

<div class="field">
  <label class="label">School Name</label>
  <div class="control">
    <textarea class="textarea" placeholder="School Name"></textarea>
  </div>
</div>

{/* ASK TOMORROW IF THERE IS A LIST */}
<div class="field">
  <label class="label">Area child would like support with</label> 
  <div class="control">
    <textarea class="textarea" placeholder="Area for support"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox" /> 
      The parent has consented to the child being signed up to the programme
    </label>
  </div>
</div>

<div class="field">
  <label class="label">Sign</label>
  <div class="control">
    <textarea class="textarea" placeholder="Sign here"></textarea>
  </div>
</div>

<div class="field">
  <label class="label">Date</label>
  <div class="control">
    <input type="date" />
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
    </>


}

export default Register;