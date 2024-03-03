<template>
  <div id="welcome-page-container">

    <Navbar />

    <!--============================= WELCOME BLOCK =============================-->

    <div id="welcome-block">
      <div id="welcome-overlay">
        <div><img id="asteroid1" src="../../assets/background-textures/asteroid1.png"></div>
        <div><img id="asteroid2" src="../../assets/background-textures/asteroid2.png"></div>
        <div><img id="asteroid3" src="../../assets/background-textures/asteroid3.png"></div>
        <div id="welcome-nav">
            <div id="header">Welcome to SpySky</div>
            <p>We dream of a time when space is free from junk, and that's what 
              SpySky is all about. We watch satellites and space junk really closely,
               and we share all that info with space agencies, big companies, and 
              anyone who loves space.</p>
              <div class="nasa-data">
                <img src="../../assets/icons/nasa_logo.png" alt="nasa-logo">
                <p>Based on NASA open data</p>
              </div>
            <div class="welcome-buttons">
                    <button id="fill"><img src="../../assets/icons/arrow.svg"> Explore our tools</button>
            </div>
        </div>
      </div>
      <planetModel />
    </div>

    <!--============================= ABOUT US BLOCK =============================-->

    <div id="about-us-block">
      <div id="left-side">
        <div id="black-cover"></div>
        <img id="junk1" src="../../assets/background-textures/junk1.png">
        <img id="junk2" src="../../assets/background-textures/asteroid1.png">
        <img id="astronaut" src="../../assets/background-textures/astronaut.png">
      </div>
      <div id="right-side">
        <div class="block-count">01.</div>
        <div class="header-container">
          <p class="header-mid">About Us</p>
          <img src="../../assets/icons/about-us.png" alt="about-us-logo">
        </div>
        <p>
          Our main goal is to stop problems in Space. 
          SpySky isn't just about keeping satellites safe; 
          it's also about taking care of space. By watching 
          space junk, we learn more about how it moves and 
          what it might do. This helps everyone make smart 
          choices to keep space clean and safe.
        </p>
        <p>
          SpySky has a smart system that watches and remembers where satellites 
          and space junk go. We don't just know where they are now, but we also 
          keep a record of where they've been. Our big list of space info is useful for
          scientists, students, and space fans who want to know more about 
          what's up there.
        </p>
      </div>
    </div>

    <!--============================= OUR MISSION BLOCK =============================-->

    <div id="our-mission-block">
      <div class="block-header">
        <div class="block-count">02.</div>
        <div class="header-container">
            <p class="header-mid">Our mission</p>
            <img src="../../assets/icons/our-mission.png" alt="our-mission-logo">
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="our-mission-container">
        <div class="our-goals">
          <div id="goal">
            <div>
              <div>
                <div id="bullet">
                  <div></div>
                </div>
                <p id="goal-header">Goal 1</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div id="goal">
            <div>
              <div>
                <div id="bullet">
                  <div></div>
                </div>
                <p id="goal-header">Goal 2</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div id="goal">
            <div>
              <div>
                <div id="bullet">
                  <div></div>
                </div>
                <p id="goal-header">Goal 3</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
        <div class="our-mission-decor-container">
          <img class="moon" src="../../assets/background-textures/moon.png">
        </div>
      </div>
    </div>

    <!--============================= QUOTE BLOCK =============================-->

    <div id="quote-block">
      <div id="blue-line"></div>
      <p>“That's one <span id="pink-font">small step</span> for a man, one <span id="pink-font">giant leap</span> for mankind.”</p>
    </div>

    <!--============================= SPYSKY TEAM BLOCK =============================-->

    <div id="our-team-block">
      <div class="block-header">
        <div class="block-count">03.</div>
        <div class="header-container">
            <p class="header-mid">SpySky team</p>
            <img src="../../assets/icons/spysky-team.png" alt="spysky-team-logo">
        </div>
        <p>
          SpySky team is a dynamic and collaborative group. With diverse skills and knoledge,
          we work together seamlessly to achieve excellence and drive innovation in our respective fields.
        </p>
      </div>
      <div class="team-cards">
        <div>
          <div>
            <div class="member-photo" id="dasha"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Designer</p>
                <p class="member-name">Darina Mamokina</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div class="member-photo" id="liza"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Front-end developer</p>
                <p class="member-name">Liza Humnytska</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div class="member-photo" id="sviat"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Back-end developer</p>
                <p class="member-name">Sviatoslav Strubytskyi</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div class="member-photo" id="taras"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Project manager</p>
                <p class="member-name">Taras Hmaruk</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <div class="member-photo" id="oleksandr"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Data Engineer</p>
                <p class="member-name">Oleksandr Prosymiak</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div class="member-photo" id="maks"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">ML Engineer</p>
                <p class="member-name">Maksym Kahadii</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div class="member-photo" id="anastasia"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Mentor</p>
                <p class="member-name">Anastasia Deineko</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div class="member-photo" id="denis"></div>
            <div class="all-info">
              <div class="square">
                <img src="../../assets/icons/pc.svg" alt="pc">
              </div>
              <div class="member-info">
                <p class="team-role">Mentor</p>
                <p class="member-name">Denis Savenkov</p>
              </div>
            </div>
          </div>
        </div>
              
      </div>
    </div>

    <!--============================= PRICING BLOCK =============================-->

    <div class="pricing-block">
      <div class="block-header">
        <div class="block-count">04.</div>
        <div class="header-container">
            <p class="header-mid">Pricing</p>
            <img src="../../assets/icons/pricing.png" alt="pricing-logo">
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua.
          Ut ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
        <div class="subscription-card">
          <img src="../../assets/background-textures/decor-card.png">
          <div>
            <img src="../../assets/icons/free-subscription.svg" alt="free-logo">
            <div class="price-info">
              <p>Demo version</p>
              <p>Basic version with minimum of functions</p>
              <p>free</p>
            </div>
            <button>Get subscription</button>
          </div>
        </div>
        <div class="subscription-card">
          <img src="../../assets/background-textures/decor-card.png">
          <div>
            <img src="../../assets/icons/paid-subscription.svg" alt="paid-logo">
            <div class="price-info">
              <p>Development version</p>
              <p>All functions and code included</p>
              <p>10 $</p>
            </div>
            <button>Get subscription</button>
          </div>
        </div>
    </div>

    <!--============================= CONTACT US BLOCK =============================-->

    <div id="contact-us-block">
      <div class="block-header">
        <div class="block-count">05.</div>
        <div class="header-container">
            <p class="header-mid">Contact us</p>
            <img src="../../assets/icons/contact-info.png" alt="contacts-logo">
        </div>
        <p>
          Contact us via our mail address@gmail.com if you have any questions.<br>Also, sign up for updates.
        </p>
      </div>
      <form id="short-form">
        <div>
          <input type="text" placeholder="Your email">
        </div>
        <input type="submit" value="Send">
      </form>
    </div>

    <Footer />

  </div>
</template>
  
<script>

import Navbar from "../components/navbar.vue";
import Footer from "../components/footer.vue";
import planetModel from "../components/planetScript.vue";

export default {
  name: "welcomePage",
  components: {
    Navbar,
    Footer,
    planetModel
  }
}

</script>
  
<style>
/*===================== CONTAINERS ===========================*/

#welcome-page-container {
  width: 100vw;
  position: relative;
  color: white;
  font-family: 'Exo 2', sans-serif;
  box-sizing: border-box;
  padding: 0 150px;
  background-color: black;
}


/*=================== WELCOME OVERLAY BLOCK ===============================*/

#welcome-block {
  width: 100vw;
  height: 100vh;
}

#welcome-overlay {
    position: relative;
    z-index: 100;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 40%;
}

#welcome-nav {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

#welcome-nav p {
  width: 80%;
  line-height: 150%;
  font-size: 18px;
}

#welcome-nav #header {
    font-size: 48px;
    font-weight: 700;
    text-transform: uppercase;
}

#welcome-overlay .welcome-buttons {
    margin-top: 10px;
    display: flex;
    gap: 20px;
}

#welcome-overlay .welcome-buttons button {
    font-size: 20px;
    font-family: 'Exo 2', sans-serif;
    color: white;
    height: 50px;
    padding: 0 25px;
    border: 0;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.17);
    cursor: pointer;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
}

#welcome-overlay .welcome-buttons button img {
  filter: invert(1);
  width: 1.5rem;
  margin-right: 1rem;
}

#welcome-overlay .welcome-buttons #fill {
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
}

#welcome-overlay .welcome-buttons #stroke {
  border: 3px solid #003B72;
  background: none;
}

#welcome-overlay .welcome-buttons #stroke {
  background-color: black;
}

#welcome-overlay .nasa-data {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
}

#welcome-overlay .nasa-data img {
  height: 40px;
}

/*==================== ASTEROIDS ========================*/

#welcome-overlay #asteroid1 {
  position: absolute;
  width: 300px;
  bottom: 5%;
  right: -10%;
  transform: rotate(50deg);
  transition: 2s;
}

#welcome-overlay #asteroid1:hover {
  transform: rotate(60deg);
  right: -15%;
}

#welcome-overlay #asteroid2 {
  position: absolute;
  width: 250px;
  bottom: 35%;
  right: -60%;
  transition: 2s;
}

#welcome-overlay #asteroid2:hover {
  transform: rotate(20deg);
  right: -65%;
}

#welcome-overlay #asteroid3 {
  position: absolute;
  width: 110px;
  top: 7%;
  right: -15%;
  transform: rotate(60deg);
  transition: 2s;
}

#welcome-overlay #asteroid3:hover {
  transform: rotate(50deg);
  top: 10%;
  right: -10%;
}

/*==================== ABOUT US BLOCK ==============================*/

#welcome-page-container #about-us-block {
  width: 100%;
  height: fit-content;
  margin: 70px 0;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  flex-direction: row;
  gap: 10%;
}

#welcome-page-container #about-us-block > div {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

#welcome-page-container #about-us-block #left-side {
  width: 55%;
  position: relative;
  display: flex;
}

#welcome-page-container #about-us-block #black-cover {
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #D9D9D9 -1.11%, rgba(0, 0, 0, 0.93) -1.1%, rgba(0, 0, 0, 0.00) 100%);
  z-index: 500;
}

#welcome-page-container #about-us-block #junk1 {
  position: absolute;
  width: 300px;
  bottom: 0;
  right: 50%;
}

#welcome-page-container #about-us-block #junk2 {
  position: absolute;
  left: 5%;
  width: 200px;
  top: 0;
}

#welcome-page-container #about-us-block #astronaut {
  position: absolute;
  width: 550px;
  right: 0;
  transition: 1s;
  z-index: 1000;
}

#welcome-page-container #about-us-block #astronaut:hover {
  right: 2%;
  transform: rotate(5deg);
}

#welcome-page-container #about-us-block #right-side {
  width: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*======================== OUR MISSION BLOCK ================================*/

#our-mission-block .our-mission-container {
  display: flex;
  flex-direction: row;
  gap: 60px;
}

#our-mission-block .block-header {
  margin-bottom: 3.75rem;
}

#our-mission-block .our-goals {
  width: 50%;
  text-align: left;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  position: relative;
  z-index: 1000;
}

#our-mission-block .our-goals #goal {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(105deg, var(--color1), var(--color2));
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 0.25rem;
  transition: --color1 0.5s, --color2 0.5s, 1s;
}

#our-mission-block .our-goals #goal > div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #03101F;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 1.75rem;
}

@property --color1 {
  syntax: '<color>';
  initial-value: #00101F;
  inherits: false;
}

@property --color2 {
  syntax: '<color>';
  initial-value: #00101F;
  inherits: false;
}


#our-mission-block .our-goals #goal:hover {
  transform: translate(40px, 0);
  background: linear-gradient(105deg, var(--color1), var(--color2));
  transition: --color1 0.5s, --color2 0.5s, 1s;
}

#our-mission-block .our-goals #goal:hover,
#our-mission-block .our-goals #goal:hover #bullet div {
  --color1: #003B72;
  --color2: #207DD2;
}

#goal #bullet {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

#goal #bullet div {
  width: calc(1.5rem - 6px);
  height: calc(1.5rem - 6px);
  background: linear-gradient(105deg, var(--color1), var(--color2));
  transition: --color1 0.5s, --color2 0.5s;
  border-radius: 0.4rem;
}

#goal #goal-header {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%; 
  text-transform: uppercase;
}

#goal > div > div {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.our-mission-decor-container {
  position: relative;
  width: 50%;
}

.our-mission-decor-container .moon {
  position: absolute;
  right: -600px;
  top: 50px;
  z-index: 10;
}

/*============================= QUOTE BLOCK ====================================*/

#quote-block {
  font-size: 6rem;
  font-weight: 400;
  line-height: 130%;
  box-sizing: border-box;
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin: 150px 0;
  z-index: 1000;
  position: relative;
}

#quote-block #pink-font {
  color: #FFC8C2;
  font-weight: 700;
}

#quote-block #blue-line {
  align-self: stretch;
  width: 0.75rem;
  border-radius: 1rem;
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
}

/*=========================== SPYSKY TEAM =======================================*/

@property --color3 {
  syntax: '<color>';
  initial-value: #003B72;
  inherits: false;
}

@property --color4 {
  syntax: '<color>';
  initial-value: #207DD2;
  inherits: false;
}

#our-team-block {
  margin-bottom: 150px;
}

#our-team-block .block-header {
  margin-bottom: 3.75rem;
}

.team-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 3rem;
  row-gap: 4.75rem;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding-top: 30px;
}

.team-cards > div {
  background: linear-gradient(105deg, var(--color3), var(--color4));
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-sizing: border-box;
  transition: --color3 0.5s, --color4 0.5s, 1s;
}

.team-cards > div:hover {
  --color3: #FF8C71;
  --color4: #FF8C71;
  transform: translate(0, -30px);
  box-shadow: 0px 0px 12.8px 0px rgba(255, 140, 113, 0.55);
}

.team-cards > div > div {
  border-radius: 0.5rem;
  background-color: black;
  width: 100%;
  height: 100%;
}

.team-cards > div .member-photo {
  width: 100%;
  border-radius: 8px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
}

.team-cards .square {
  box-sizing: border-box;
  background-color: black;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-left: -10px;
}

.team-cards .square img {
  height: 40px;
  width: 40px;
}

.team-cards .all-info {
  margin: 0 1.5rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: -30px;
}

.member-info {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.team-role {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
}

.member-name {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 150%;
}

/*================== MEMBERS' PHOTOS =============================*/

#dasha {
  background-image: url("../../assets/members/dasha.jpg");
  background-position: 0 30%;
}

#liza {
  background-image: url("../../assets/members/liza.jpg");
  background-position: 0 45%;
}

#sviat {
  background-image: url("../../assets/members/sviat.jpg");
}

#taras {
  background-image: url("../../assets/members/taras.jpg");
  background-position: 0 45%;
}

#maks {
  background-image: url("../../assets/members/maks.jpg");
  background-position: 0 75%;
}

#oleksandr {
  background-image: url("../../assets/members/oleksandr.jpg");
  background-position: 0 45%;
}

#anastasia {
  background-image: url("../../assets/members/anastasia.jpg");
  background-position: 0 45%;
}

#denis {
  background-image: url("../../assets/members/denis.jpg");
  background-position: 0 45%;
}

/*============================= PRICING BLOCK ===================================*/

.pricing-block {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 5rem;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 150px;
}

.pricing-block .block-header {
  align-items: flex-start;
  text-align: left;
  margin: 0;
  justify-content: center;
  width: 80%;
}

.subscription-card {
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  box-sizing: border-box;
  height: fit-content;
  box-shadow: 0px 0px 8.8px 7px rgba(0, 20, 45, 0.85);
  position: relative;
}

.subscription-card > img {
  position: absolute;
  right: 4px;
  top: 4px;
  filter: drop-shadow(0px 0px 8.9px rgba(0, 0, 0, 0.25));
}

.subscription-card > div {
  background-color: #03101F;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 4rem 0;
}

.subscription-card > div img {
  height: 4.375rem;
}

.subscription-card > div button {
  height: 50px;
  padding: 0 25px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
  box-shadow: 0px 0px 3.8px 0px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.subscription-card > div .price-info {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
}

.subscription-card > div .price-info p:nth-child(1) {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%; 
  text-transform: uppercase;
}

.subscription-card > div .price-info p:nth-child(2) {
  color: #FFC8C2;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 150%;
  width: 90%;
}

.subscription-card > div .price-info p:nth-child(3) {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
}

/*============================= CONTACT US BLOCK ===================================*/

#contact-us-block {
  width: 100%;
  background-image: url("../../assets/background-textures/contact-bg.png");
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  box-sizing: border-box;
  padding: 150px 0;
}

#contact-us-block #short-form {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

#contact-us-block #short-form > div {
  width: 20rem;
  border-radius: 0.5rem;
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
}

#contact-us-block #short-form > div input {
  width: 20rem;
  height: calc(100% - 3px);
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 0;
  background: black;
  color: #A1A1A1;
  font-size: 1rem;
  font-weight: 400;
  transition: 0.5s;
}

#contact-us-block #short-form > div input:focus {
  outline: none;
  box-shadow: 0px 0px 8.8px 7px rgba(0, 20, 45, 0.85);
}

#contact-us-block #short-form > input {
  padding: 0 25px;
  border-radius: 0.5rem;
  border: 0;
  background: linear-gradient(105deg, #003B72 0%, #207DD2 100%);
  box-shadow: 0px 0px 3.8px 0px rgba(0, 0, 0, 0.17);
  cursor: pointer;
  color: white;
  font-size: 20px;
  font-weight: 600;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

#contact-us-block #short-form > input:hover {
  box-shadow: 0px 0px 8.8px 7px rgba(0, 20, 45, 0.85);
}

</style>