import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import GroupsIcon from "@mui/icons-material/Groups";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "../../../css/market_home.css";
import "../../../css/about.css";
import "../../../css/aboutMobile.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const HomeUpdate = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className="h_update_hero_section">
        <div className="container">
          <div className="h_update_hero_area">
            <div className="h_update_hero_area1">
              <div className="h_update_hero_area1_title">
                The Better Way to Borrow & Save Money.
              </div>
              <div className="h_update_hero_area1_para">
                Interest-free loans, plus our target Savings tools to help you
                get any personal properties with ease. Put your personal
                properties up as collateral for an interest-free loan. Certain
                fees apply.
              </div>{" "}
              <div className="h_update_hero_area1_para_btns">
                <button className="h_update_hero_area1_para_btn1">
                  Start Now <ArrowRightIcon />
                </button>
                <button className="h_update_hero_area1_para_btn2">
                  <ArrowRightIcon /> Play Video
                </button>
              </div>
            </div>
            <div className="h_update_hero_area2">
              <Slider {...settings}>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv1.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv2.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv3.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
                <div className="imggss">
                  <div>
                    <img
                      src="/img/sv4.svg"
                      alt=""
                      className="h_update_hero_area_img"
                    />
                  </div>
                </div>
              </Slider>
              <img
                src="/img/img_circles_slide.svg"
                alt=""
                className="circle_slides"
              />
            </div>
          </div>
        </div>
        <img
          src="/img/new_hero_bg_blur.png"
          alt=""
          className="new_hero_bg_blur"
        />
        <img
          src="/img/new_hero_citcle_1.svg"
          alt=""
          className="new_hero_circle1"
        />
        <img
          src="/img/new_hero_circle_2.svg"
          alt=""
          className="new_hero_circle2"
        />
      </section>
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      {/* =========== */}
      <section className="new_hero_section2">
        <div className="container">
          <div className="new_hero_section2_area">
            <div
              className="operations_cards_cont"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <div className="operations_card1">
                <div className="operations_card1_title">
                  Use our target savings and get up to
                  <span className="hover_color"> 13% interest </span> every
                  year.
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/percentage_icon_1.svg"
                    alt=""
                    className="operations_card1_icon1"
                  />
                  <img
                    src="/img/percentage_icon_2.svg"
                    alt=""
                    className="operations_card1_icon2"
                  />
                </div>
              </div>
              <div className="operations_card1">
                <div className="operations_card1_title">
                  The assets get delivered to the shipping address immediately
                  after the<span className="hover_color"> savings goals </span>{" "}
                  have been met.
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/delivery_icon1.svg"
                    alt=""
                    className="operations_card1_icon1a"
                  />
                  <img
                    src="/img/delivery_icon2.svg"
                    alt=""
                    className="operations_card1_icon2a"
                  />
                </div>
              </div>
              <div className="operations_card1">
                <div className="operations_card1_title">
                  Get<span className="hover_color"> interest-free </span> loans
                  instantly after evaluation of assets.
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/assets_icon1.svg"
                    alt=""
                    className="operations_card1_icon1b"
                  />
                  <img
                    src="/img/assets_icon2.svg"
                    alt=""
                    className="operations_card1_icon2b"
                  />
                </div>
              </div>
              <div className="operations_card1">
                <div className="operations_card1_title">
                  Collaterals are converted to{" "}
                  <span className="hover_color">NFTs </span> and stored in the
                  blockchain.
                </div>
                <div className="operations_card1_img">
                  <img
                    src="/img/block_chain_icon1.png"
                    alt=""
                    className="operations_card1_icon1c"
                  />
                  <img
                    src="/img/block_chain_icon2.png"
                    alt=""
                    className="operations_card1_icon2c"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/new_left_dots.svg"
          alt=""
          className="new_hero_left_dots"
        />
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section1">
        <div className="container">
          <div className="new_home_attributes_area">
            <div
              className="new_home_attributes_area1"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div className="new_home_attributes_area1_txt">
                {" "}
                <h4 className="new_home_attributes_area1_txt_head">
                  Your interest-free loans in 5mins.
                </h4>
                <p className="new_home_attributes_area1_txt_para">
                  Seal the deal in just 3 steps! Get a value of your collateral,
                  fix an appointment with the Egoras branch nearest to you, and
                  finally, receive your loan before the collateral leaves your
                  hands.
                </p>
              </div>
              <a href="#" className="new_home_attributes_area1_link">
                Get A loan In Minutes{" "}
                <ArrowForwardIosIcon className="link_arrow" />
              </a>
            </div>{" "}
            <div
              className="new_home_attributes_area2"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img src="/img/take_loan.svg" alt="" className="take_loan_img" />
            </div>
          </div>
        </div>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section4">
        <div className="container">
          <div className="build_savings_area">
            <div className="build_savings_area1">
              <div className="compliment_number_title">
                Save Better. Choose Egoras.
              </div>
              <div className="compliment_number_para">
                Earn 5%-15% when you save with Egoras.
              </div>
              <button className="compliment_btn">Start Saving</button>
            </div>
            <div className="build_savings_area2">
              <div className="build_savings_area2_conts1">
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <ExitToAppIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Signing up is simple.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      No long applications or complicated terms & conditions.
                      Have your email, phone number, address, DOB, and
                      debit/credit card handy—that’s it.
                    </div>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <AccountBalanceWalletIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Get what you need right now.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      Make your first savings today and the rest over 6 weeks.
                      It is that simple to acquire any household items.
                    </div>
                  </div>
                </div>
              </div>
              {/* ===== */}
              {/* ===== */}
              <div className="build_savings_area2_conts1">
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <ManageAccountsIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      Manage with smart limits.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      Check your available spend and stay within budget. And
                      spend wisely with limits that gradually increase with
                      on-time payments.
                    </div>
                  </div>
                </div>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div
                  className="build_savings_area2_conts1_box1"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <GroupsIcon className="conts1_box1_contents_icon" />
                  <div className="build_savings_area2_conts1_box1_contents">
                    {" "}
                    <div className="build_savings_area2_conts1_box1_title">
                      We’ve got your back.
                    </div>
                    <div className="build_savings_area2_conts1_box1_para">
                      We’ll send reminders, so you never miss a payment. And if
                      you do, we pause your account until you’re back on track.
                      There are no fees when you pay on time. And late fees are
                      capped at 25% of the purchase price.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/left_line.svg" alt="" class="shape_eggg"></img>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section1">
        <div className="container">
          <div className="new_home_attributes_area">
            <div
              className="new_home_attributes_area2"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src="/img/new_save_money_img.svg"
                alt=""
                className="take_loan_img2"
              />
            </div>
            <div
              className="new_home_attributes_area1"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div className="new_home_attributes_area1_txt">
                {" "}
                <h4 className="new_home_attributes_area1_txt_head">
                  Goal-oriented Savings.
                </h4>
                <p className="new_home_attributes_area1_txt_para">
                  Get rewarded when you reach all your savings goals faster.
                  Acquire personal properties with ease with our target savings
                  tools. Earn 9% per annum to help you reach your goal faster.
                  Think of it as a reward for meeting your target.
                </p>
              </div>
              <a href="#" className="new_home_attributes_area1_link">
                Start Saving In Minutes{" "}
                <ArrowForwardIosIcon className="link_arrow" />
              </a>
            </div>{" "}
          </div>
        </div>

        <img src="/img/new_abstract_img.svg" alt="" class="shape_eggg2"></img>
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="new_home_attributes_section4">
        <div className="container">
          <div className="new_home_attributes_area">
            <div
              className="new_home_attributes_area1"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div className="new_home_attributes_area1_txt">
                {" "}
                <h4 className="new_home_attributes_area1_txt_head">
                  Become A Validator
                </h4>
                <p className="new_home_attributes_area1_txt_para">
                  With Egoras Protocol, you earn more when you back real people
                  to access interest free loans instantly with their used
                  item(s).
                </p>
              </div>
              <a href="#" className="new_home_attributes_area1_link">
                Back A loan Now <ArrowForwardIosIcon className="link_arrow" />
              </a>
            </div>{" "}
            <div
              className="new_home_attributes_area2"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <img
                src="/img/validated_img.svg"
                alt=""
                className="take_loan_img5"
              />
            </div>
          </div>
        </div>
        {/* <img src="/img/left_line.svg" alt="" class="shape_eggg3"></img> */}
      </section>
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      {/* ======== */}
      <section className="users_compliment_section">
        <div className="container">
          <div className="users_compliment_area">
            <div className="users_compliment_box">
              <div class="testimonials">
                <div height="857" class="sc-bdfBQB fXZgI">
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Friday, 27th of August 2021 by 20:39 PM
                    </small>
                    <div class="mt-20 clear-right">
                      <div>
                        <h6>Helen S</h6>
                        <p className="compliment_para">
                          Wow! Where has Piggyvest been all my adult life?.... I
                          wish I knew about Piggyvest in my early days, I knew
                          about it in a group chat on Whatsapp, at first I "said
                          to myself this can't be real", but once I sign in, I
                          got impressed and challenged myself. I am able to save
                          money monthly. I love it!" "Piggyvest helped me to
                          save better especially for rainy days. It's hard
                          saving on your own and very tempting but with
                          Piggyvest, I get to save with discipline." I love to
                          share this with my friends.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Wednesday, 25th of August 2021 by 21:33 PM
                    </small>
                    <div class=" mt-20 clear-right">
                      <div>
                        <h6>Kenechukwu E</h6>
                        <p className="compliment_para">
                          I used to have a problem of spending money on the go.
                          When my brother told me about Piggyvest I was
                          reluctant. But I am happy he persuaded me. Piggyvest
                          has helped me to instill discipline financially.
                          Piggyvest is a sure way to prepare for the future.
                          Trust piggyvest they got your back👍
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <small style={{ color: "#239e54" }}>
                      Tuesday, 24th of August 2021 by 18:09 PM
                    </small>
                    <div class=" mt-20 clear-right">
                      <div>
                        <h6>Cynthia C</h6>
                        <p className="compliment_para">
                          PiggyVest has helped my life truly in many ways. I was
                          kinda restless, helpless, but PiggyVest gave me the
                          courage to stand. I couldn't save nor make a profit. I
                          found PiggyVest it changed my life. It gave me a
                          turnaround. I made a huge amount from it, which have
                          helped me Soo much in my everyday life especially my
                          Education, finance, etc This is not the opportunity
                          you should miss, have a plan B, think better for the
                          future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="users_compliment_number">
              <div className="compliment_number_title">
                Over 2billion naira in loans.
              </div>
              <div className="compliment_number_para">
                Since launching in 2020, over 3,000,000 people have used
                PiggyVest to manage their money better, avoid over-spending and
                be more accountable.
              </div>
              <button className="compliment_btn">Create a free account</button>
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <section className="featured_section">
        <div className="container">
          <div className="gtstoriesArea">
            {/* Carousel start==============================
==============================================
============================= */}
            <Carousel
              responsive={responsive}
              className="partnerCards"
              showDots={false}
              //   infinite={false}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
              draggable={true}
              swipeable={true}
            >
              <div className="partnerLogo1">
                <a href="https://cointelegraph.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/coin-telegraph.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://finance.yahoo.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/YAHOOFINANCE.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://www.newsbtc.com/" className="partnerLink">
                  {" "}
                  <img src="/img/NEWSBTC.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://apnews.com/" className="partnerLink">
                  {" "}
                  <img src="/img/APNEWS.svg" alt="" className="partnerlog" />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://independent.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/INDEPENDENT.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://guardian.ng/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/THEGUARDIAN.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
              <div className="partnerLogo1">
                <a href="https://nairametrics.com/" className="partnerLink">
                  {" "}
                  <img
                    src="/img/NAIRAMETRICS.svg"
                    alt=""
                    className="partnerlog"
                  />
                </a>
              </div>
            </Carousel>
            {/* Carousel end==============================
==============================================
============================= */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeUpdate;
