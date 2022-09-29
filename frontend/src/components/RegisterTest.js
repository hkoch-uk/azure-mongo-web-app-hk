import React from "react"

export function RegisterTest() {

  var memberOption;

  function handleClick(e) {
    memberOption = e.target.value
    console.log(memberOption)
  }
  const [schoolActive, setSchoolActive] = React.useState("is-active")
  const [buddyActive, setBuddyActive] = React.useState("")
  const [sponsorActive, setSponsorActive] = React.useState("")
  const [schoolSeen, setSchoolSeen] = React.useState("")
  const [buddySeen, setBuddySeen] = React.useState("is-hidden")
  const [sponsorSeen, setSponsorSeen] = React.useState("is-hidden")

  function toggleClicks(e) {
    if (e.target.text === "School") {
      setSchoolActive("is-active")
      setSchoolSeen("")
      setBuddyActive("")
      setSponsorActive("")
      setSponsorSeen("is-hidden")
      setBuddySeen("is-hidden")

    } else if (e.target.text === "Buddy") {
      setBuddyActive("is-active")
      setBuddySeen("")
      setSchoolActive("")
      setSponsorActive("")
      setSchoolSeen("is-hidden")
      setSponsorSeen("is-hidden")
    }
    else if (e.target.text === "Sponsor") {
      setSponsorActive("is-active")
      setSponsorSeen("")
      setSchoolActive("")
      setBuddyActive("")
      setSchoolSeen("is-hidden")
      setBuddySeen("is-hidden")


    }

  }




  return <>
    <section class="section">
      <div class="tabs is-centered">
        <ul onClick={(choice) => toggleClicks(choice)}>
          <li class={schoolActive}><a>School</a></li>
          <li class={buddyActive} ><a>Buddy</a></li>
          <li class={sponsorActive}><a>Sponsor</a></li>
        </ul>
      </div>
      <div class="px-2" id="tab-content">
        <div class={schoolSeen}>
          <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Full Name" />
              <span class="icon is-small is-left">
                <i class="fas fa-person"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Address</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input is-success" type="text" placeholder="Address" />
              <span class="icon is-small is-left">
                <i class="fas fa-house"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email Address" />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Contact Number</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Contact Number" />
              <span class="icon is-small is-left">
                <i class="fas fa-phone"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">School Name</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="School Name"></input>
              <span class="icon is-small is-left">
                <i class="fas fa-school"></i>
              </span>
            </div>
          </div>

          {/* <div class="field">
            <label class="label">Area child would like support with</label>
            <div class="control">
              <input class="input" type="text" placeholder="Area for support"></input>
            </div>
          </div> */}

          {/* <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                The parent has consented to the child being signed up to the programme
              </label>
            </div>
          </div> */}

          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button button is-danger is-rounded">Submit</button>
            </div>
            <div class="control">
              <button class="button is-rounded">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div class={buddySeen}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Full Name" />
            <span class="icon is-small is-left">
                <i class="fas fa-person"></i>
              </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Address" />
            <span class="icon is-small is-left">
              <i class="fas fa-house"></i>
            </span>

          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email Address" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Contact Number</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Contact Number" />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Occupation</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Occupation"></input>
            <span class="icon is-small is-left">
              <i class="fas fa-briefcase"></i>
            </span>
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
        <div class="field is-grouped">
            <div class="control">
              <button class="button is-danger is-rounded">Submit</button>
            </div>
            <div class="control">
              <button class="button is-rounded">Cancel</button>
            </div>
          </div>
      </div>



      <div class={sponsorSeen}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Full Name" />
            <span class="icon is-small is-left">
                <i class="fas fa-person"></i>
              </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Address</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-success" type="text" placeholder="Address" />
            <span class="icon is-small is-left">
              <i class="fas fa-house"></i>
            </span>

          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email Address" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Contact Number</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="Contact Number" />
            <span class="icon is-small is-left">
              <i class="fas fa-phone"></i>
            </span>
          </div>
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" />
                I agree to the terms and conditions
              </label>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-danger is-rounded">Submit</button>
            </div>
            <div class="control">
              <button class="button is-rounded">Cancel</button>
            </div>
          </div>

        </div>
      </div>
    </section>

  </>


}