export function ReadingHero() {
  return <>
    <section class="hero is-link is-fullheight-with-navbar reading-background">
    <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title is-size-1">
        StartYoungUK
      </p>
      <p class="title is-size-3">
        Giving children the best start
      </p>
      <div class="container has-text-centered">
          <button class="button is-danger" id='learn-btn'>
            LEARN MORE
          </button>
        </div>
    </div>
  </div>
  </section>
  </>
}

function printChoice(val) {
  let btn = document.getElementById('learn-btn')
  let btnItem = val.target.value;
  if (btnItem === 'a') {
    btn.classList.add('hidden')
  } else {
    btn.classList.remove('hidden')
  }
  console.log(val.target.value)
}