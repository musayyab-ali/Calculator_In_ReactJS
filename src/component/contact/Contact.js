import React from "react";
import "./contact.css";

function Contact() {
  return (
    <>
      <div class="container">
        <div class="innerwrap">
          <section class="section1 clearfix">
            <div class="textcenter">
              <span class="shtext">Contact Us</span>
              <span class="seperator"></span>
              <h1>Drop Us a Mail</h1>
            </div>
          </section>

          <section class="section2 clearfix">
            <div class="col2 column1 first"></div>
            <div class="col2 column2 last">
              <div class="sec2innercont">
                <div class="sec2addr">
                  <p>
                    1048 Ravi Block Kareem Market Iqbal Town Lahore Punjab
                    ,Pakistan
                  </p>
                  <p>
                    <span class="collig">Phone :</span> +92 3401100111
                  </p>
                  <p>
                    <span class="collig">Email :</span> reactjs@gmail.com
                  </p>
                  {/* <p>
                    <span class="collig">Fax :</span> +91 9768850839
                  </p> */}
                </div>
              </div>
              <div class="sec2contactform">
                <h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                <form action="">
                  <div class="clearfix">
                    <input
                      class="col2 first"
                      type="text"
                      placeholder="FirstName"
                    />
                    <input
                      class="col2 last"
                      type="text"
                      placeholder="LastName"
                    />
                  </div>
                  <div class="clearfix">
                    <input
                      class="col2 first"
                      type="Email"
                      placeholder="Email"
                    />
                    <input
                      class="col2 last"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div class="clearfix">
                    <textarea name="textarea" id="" cols="30" rows="7">
                      Your message here...
                    </textarea>
                  </div>
                  <div class="clearfix">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
