$(document).ready(function () {
  let cityProperty = ` <!-- hostel detail - 8 -->

    <div id="inserted-hotel1" class="inserted-same">
        <div class="city-img-left">
            <picture>
                <source
                    srcset="https://unsplash.com/photos/n_IKQDCyrG0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyMTYxOTIx&force=true">
                <img src="https://unsplash.com/photos/n_IKQDCyrG0/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjgyMTYxOTIx&force=true"
                    alt="this is city hostel or room left images">
            </picture>
        </div>
        <div class="mid-details">
            <div class="mid-detail1">
                <div class="mid-detail2">
                    <div class="rating-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="pro-type">
                        <span>Hostel</span>
                    </div>

                    <div class="review-details">
                        <div class="review-details2">
                            <label for="">Very Good</label>
                            <span>200 Review</span>
                        </div>
                        <div class="rating-num">
                            <span>4.0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mid-details3">
                <div class="mid-h2">
                    <h2>Hostel Name</h2>
                </div>
                <div class="mid-address-line">
                    <span class="address-span1">Address line here</span>
                    <span class="address-span2"><i class="fa-solid fa-map-pin"></i>far from
                        city here</span>
                </div>
                <div class="mid-promocode">
                    <span><i class="fa-solid fa-tags"></i></span>
                    <strong class="strong-disc">Happy</strong>
                    <span>discount code</span>
                </div>
            </div>
        </div>
        <div class="city-price-last">
            <div class="city-price-child">
                <span class="city-price-span city-span-color"><i
                        class="fa-solid fa-indian-rupee-sign"></i><span
                        class="line-through">4000</span></span>
                <span class="city-price-span rs-span"><i class="fa-solid fa-indian-rupee-sign"></i><span
                        id="dynamic-hostel-price" class="dynamic-hostel-price">2799</span></span>
                <span class="city-price-span tax-price">+<i
                        class="fa-solid fa-indian-rupee-sign"></i><span id="dynamic-tax">280.0
                        <span>taxes & fees</span></span></span>
                <div class="view-btn">
                    <button type="button" class="view-prop" id="dynamic-prop">View Room</button>
                </div>
            </div>
        </div>
    </div>`;
  window.onscroll = function () {
    if (window.pageYOffset) {
      $(".nav-bg").css("background", "#fff");
      $(".nav-bg").css("transition", "0.2s");
      $(".logo-a").css("color", "#000");
      $(".login-a").css("background", "");
      $(".fa-user").css("color", "#000");
      $(".login-span").css("color", "#000");
      $(".nav-sticky").addClass("nav-bg-shadow");
      $(".scroll-top").css("display", "block");
      $(".header-24x7").css("color", "#000");
      $(".telephone-icon").attr("src", "../dist/img/tele-icon/tele-icon2.png");
      $(".pic-tele-icon").attr(
        "srcset",
        "../dist/img/tele-icon/tele-icon2.png"
      );
      $(".login-src").attr("src", "../dist/img/tele-icon/user-icon.png");
      $(".login-srcset").attr("srcset", "../dist/img/tele-icon/user-icon.png");
      $(".login-div i").css("color", "#000");
      $(".mo-email-24x7").removeClass("mo-email-2");
      $(".mo-email-24x7 a").removeClass("a-white");
      $(".booking-ul a").css("color", "#000");
      // $(".login-abso").css("border", "1px solid #000");
      $(".login-abso").addClass("login-abso2");
    } else {
      $(".nav-bg").css("background", "");
      $(".login-a").css("color", "#fff");
      $(".logo-a").css("color", "#fff");
      $(".fa-user").css("color", "#fff");
      $(".login-span").css("color", "#fff");
      $(".nav-sticky").removeClass("nav-bg-shadow");
      $(".scroll-top").css("display", "none");
      $(".header-24x7").css("color", "#fff");
      $(".telephone-icon").attr("src", "../dist/img/tele-icon/tele-icon.png");
      $(".pic-tele-icon").attr("srcset", "../dist/img/tele-icon/tele-icon.png");
      $(".login-div i").css("color", "#fff");
      $(".mo-email-24x7").addClass("mo-email-2");
      $(".mo-email-24x7 a").addClass("a-white");
      $(".login-src").attr("src", "../dist/img/tele-icon/user-icon2.png");
      $(".login-srcset").attr("srcset", "../dist/img/tele-icon/user-icon2.png");
      $(".booking-ul a").css("color", "#fff");
      $(".login-abso").css("border", "1px solid #fff");
      $(".login-abso").removeClass("login-abso2");
    }
  };

  if (window.pageYOffset === 0) {
    $(".nav-sticky").removeClass("nav-bg-shadow");
  }
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
  });

  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    autoPlay: 2500,
    freeScroll: true,
    wrapAround: true,
  });
  $(".over-carousel-slider").flickity({
    // options
    // cellAlign: "left",
    // contain: true,
    // autoPlay: 2500,
    // freeScroll: true,
    // wrapAround: true,
    pageDots: false,
  });

  $("#readMore").on("click", () => {
    if ($("#about-flow").hasClass("about-overflow2")) {
      $("#about-flow").removeClass("about-overflow2");
      $("#readMore").html("Read Less");
    } else {
      $("#about-flow").addClass("about-overflow2");
      $("#readMore").html("Read More");
    }
  });
});

let btns = document.querySelectorAll(".left-footer-btns");

btns.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".special")?.classList.remove("special");
    element.classList.add("special");
  });
});

let btns2 = document.querySelectorAll(".prop-lis");
btns2.forEach((element) => {
  element.addEventListener("click", () => {
    document
      .querySelector(".special-border")
      ?.classList.remove("special-border");
    element.classList.add("special-border");
  });
});

//footer buttons ----->
let insertFooter = document.getElementById("inserted-footer-uls");
let offerBtn = document.getElementById("offerBtn");
let quickbtn = document.getElementById("quickLinkBtn");
let popularBtn = document.getElementById("popularBtn");
let connectBtn = document.getElementById("connectBtn");
let insightBtn = document.getElementById("insightBtn");
let offer2Btn = document.getElementById("offer2Btn");

offerBtn.addEventListener("click", () => {
  insertFooter.innerHTML = `<div class="footer-h2-parent">
  <h2 id="footer-h2">Make your searching easy with range of products and services.</h2>
</div>
<div class="footer-h2-dec">
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="Hostel">Hostel</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="Rooms">Rooms</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem
                  lorem</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
      </ul>
  </div>
</div>`;
});

quickbtn.addEventListener("click", () => {
  insertFooter.innerHTML = `<div class="footer-h2-parent">
  <h2 id="footer-h2">Quick solutions for all your travel needs.</h2>
</div>
<div class="footer-h2-dec">
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="Hostel">quick Links</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="Rooms">quick Links quick Links</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links quick Links quick Links quick</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links quick Links</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links quick Links</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links quick Links quick Links</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links quick Links</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">quick Links</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem lorem lorem</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">lorem</a></li>
      </ul>
  </div>
</div>`;
});

popularBtn.addEventListener("click", () => {
  insertFooter.innerHTML = `<div class="footer-h2-parent">
  <h2 id="footer-h2">A guide to explore popular destinations.</h2>
</div>
<div class="footer-h2-dec">
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="Hostel">Rajkot</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="Rooms">Ahemdabad</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Gandhinagar</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Vadodara</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Surat</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Mumbai</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Bangalore</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Jaipur</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Kolkata</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Lukhnow</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Pune</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Hydrabad</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Chennai</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Visakhapatnam</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Kanpur</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Delhi</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Indore</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Punjab</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Ranchi</a>
          </li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Udaipur</a></li>
      </ul>
  </div>
</div>`;
});

connectBtn.addEventListener("click", () => {
  insertFooter.innerHTML = `<div class="footer-h2-parent">
  <h2 id="footer-h2">Take a look at our social presence.</h2>
</div>
                     <div class="social-icons">
                        <div class="footer-h2-dec">
                            <div class="footer-ul-parent2">
                                <ul>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="Hostel"><i
                                                class="fa-regular fa-address-card"></i><span>Contact Us</span></a></li>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="Rooms"><i
                                                class="fa-brands fa-instagram"></i><span>Instagram</span></a></li>
                                </ul>
                            </div>
                            <div class="footer-ul-parent2">
                                <ul>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="lorem"><i
                                                class="fa-brands fa-linkedin"></i><span>Linkedin</span></a></li>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="lorem"><i
                                                class="fa-brands fa-youtube"></i><span>Youtube</span></a></li>
                                </ul>
                            </div>
                            <div class="footer-ul-parent2">
                                <ul>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="lorem"><i
                                                class="fa-brands fa-square-facebook"></i><span>Facebook</span></a></li>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="lorem"><i
                                                class="fa-brands fa-telegram"></i><span>telegram</span></a></li>
                                </ul>
                            </div>
                            <div class="footer-ul-parent2">
                                <ul>
                                    <li><a href="javascript:void(0)" rel="follow" area-label="lorem"><i
                                                class="fa-brands fa-twitter"></i><span>Twitter</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="keep-in-touch">
                        <div class="keep-in-child">
                            <div class="keep-50 keep-in-elements">
                                <h2>Let's keep in touch</h2>
                                <p>Subscribe to keep up with fresh news and exciting updates. We promise not to spam
                                    you!</p>
                            </div>
                            <div class="keep-50 keep-flex">
                                <div class="keep-input-relative">
                                    <input type="email" name="email" id="newsMail" class="newsMail"
                                        placeholder="Example: abc@gmail.com">
                                    <button type="button" class="mailSubscribeBtn">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>`;
});

insightBtn.addEventListener("click", () => {
  insertFooter.innerHTML = `<div class="footer-h2-parent">
  <h2 id="footer-h2">Discover more about us.</h2>
</div>
<div class="footer-h2-dec">
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="Hostel">About Us</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="Rooms">Updates</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Free cancellation</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Investers Relation</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Refer & Earn</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Terms & Conditions</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Achievements</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Franchise</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">User Agreement</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">No convenience Fee</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Mice</a></li>
      </ul>
  </div>
</div>`;
});

offer2Btn.addEventListener("click", () => {
  insertFooter.innerHTML = `<div class="footer-h2-parent">
  <h2 id="footer-h2">We have these offers just for you.</h2>
</div>
<div class="footer-h2-dec">
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="Hostel">Gift Card</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="Rooms">Cab Offers</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Flight Offers</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Train Offers</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Hostel Offers</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Hot Deals</a></li>
      </ul>
  </div>
  <div class="footer-ul-parent2">
      <ul>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Bus Offers</a></li>
          <li><a href="javascript:void(0)" rel="follow" area-label="lorem">Special Offers</a></li>
      </ul>
  </div>
</div>`;
});
