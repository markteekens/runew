import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "../utils/api";

function Contact() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    email: "",
    telefoon: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { mutate, data, isLoading } = api.mail.addContact.useMutation();
  return (
    <div>
      <section className="splash-area-section">
        <div className="container">
          <div className="splash-area">
            <h2>Let Us Know What You&apos;re Looking For</h2>
            <a href="#">Get in Touch</a>
          </div>
        </div>
      </section>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h6>Start Your Project With Us.</h6>
            <h2>Let&apos;s Talk</h2>
            <img alt="line" src="assets/img/headingline.png" />
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      onChange={(e) =>
                        setInput((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      value={input.name}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      name="name"
                      placeholder="Your Email *"
                      onChange={(e) =>
                        setInput((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      type="email"
                      value={input.email}
                    />
                  </div>
                </div>
                <input
                  name="name"
                  placeholder="Your Phone *"
                  onChange={(e) =>
                    setInput((prev) => ({
                      ...prev,
                      telefoon: e.target.value,
                    }))
                  }
                  type="tel"
                  value={input.telefoon}
                />
                {!data ? (
                  <div>
                    <button
                      className="mt-6 w-full rounded-full border-2 border-black bg-transparent p-2 font-bold text-black transition hover:bg-black hover:text-white"
                      onClick={() =>
                        mutate({
                          name: input.name,
                          email: input.email,
                          checked: isChecked,
                          telefoon: input.telefoon,
                        })
                      }
                    >
                      Send
                    </button>
                  </div>
                ) : (
                  <div className="">
                    <button
                      disabled
                      className="mt-6 w-full rounded-full border-2 border-black bg-transparent p-2 font-bold text-black transition hover:text-white disabled:border-gray-700 disabled:text-gray-700"
                    >
                      Thank you !
                    </button>
                  </div>
                )}
                {isLoading && <p>Sending..</p>}
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
              <ul className="sidebar">
                <li>
                  <h4>Address : </h4>
                  <span>418 Orange Street Portsmouth, VA 23703</span>
                </li>
                <li>
                  <h4>Phone :</h4>
                  <a href="callto:0987123456678">
                    <span>0987 123 456 678</span>
                  </a>
                </li>
                <li>
                  <h4>Email :</h4>
                  <a href="mailto:contact@terio.com">
                    <span>contact@terio.com</span>
                  </a>
                </li>
                <li>
                  <h4>Find us :</h4>
                  <ul className="brandicon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="gap no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-logo">
                <a href="index-2.html">
                  <img alt="img" src="assets/img/logo.png" />
                </a>
                <p>
                  Aliquam porttitor mauris sit amet orci. Aenean dignissim
                  pellentesque felis. Morbi in sem quis dui placerat ornare.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="links">
                <h6>Additional links</h6>
                <ul>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="team.html">team</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">News</a>
                  </li>
                  <li className="pb-0">
                    <a href="contacts.html">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-news">
                <h6>Latest news</h6>
                <ul>
                  <li>
                    <p>
                      Quisque volutpat mattis eros. Nullam malesuadarat ut
                      turpis.
                    </p>
                    <span>dec 10, 2019 / 0 comments</span>
                  </li>
                  <li className="pt-4">
                    <p>Aliquam porttitor mauris sit amet orci.</p>
                    <span>dec 10, 2019 / 0 comments</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="latest-news">
                <h6>Subscribe</h6>
                <p>
                  Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                  diam.
                </p>
                <form>
                  <input
                    type="text"
                    name="email"
                    placeholder="your email address"
                  />
                  <button>go</button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2023 Terio Theme - All Rights Reserved | Design by upifix</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-m"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
