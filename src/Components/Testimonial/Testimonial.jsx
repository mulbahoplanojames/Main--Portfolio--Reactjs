import React from "react";
import "/src/Components/Testimonial/Testimonial.css";
import "/src/Components/Responsive.css";

const Testimonial = () => {
  return (
    <>
      <div id="testimonial">
        <p class="testimonail_title">Testimonails</p>
        <h2 class="testimonial_main_title">What client's say?</h2>
        <p class="testimonail_description">
          Love the template design, documentation, customizabiliti, and the
          customer support. I am a noob in programming but your work help me a
          lot.
        </p>

        <div class="customer_details">
          <div class="customer_image">
            <img src="src/assets/client.avif" alt="client" class="img" />
          </div>
          <div class="customer_name">
            <p>John Matthew</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
