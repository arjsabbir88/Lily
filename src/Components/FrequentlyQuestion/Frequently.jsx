import React from "react";

export const Frequently = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center text-green-600 my-5">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          What is a subscription service?
        </div>
        <div className="collapse-content text-sm">
          <p>
            A subscription service is a business model where customers pay a
            recurring fee, typically monthly or annually, to gain continuous
            access to a product or service. Instead of a one-time purchase,
            subscribers receive ongoing value for their regular payments.
          </p>
        </div>
      </div>
      {/* 2nd question */}
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          <p>Can I cancel my subscription anytime?</p>
        </div>
        <div className="collapse-content text-sm">
          <p>
            Ah, that's fantastic to know! It sounds like this particular
            subscription service has a very straightforward and user-friendly
            cancellation policy:
              <li>
                Easy Cancellation: You can manage it directly through your
                account settings, putting you in control. No Hidden
              </li>
              <li>
                Fees: That's a significant plus, as some services can surprise
                you with unexpected charges upon cancellation.
              </li>
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is customer support available 24/7?
        </div>
        <div className="collapse-content text-sm">
          Absolutely! Our support team is available around the clock to assist
          you.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Do you offer student or non-profit discounts?
        </div>
        <div className="collapse-content text-sm">
          Yes, we offer special discounts for students and non-profits. Contact
          our support team to verify your eligibility.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          How secure is my data?
        </div>
        <div className="collapse-content text-sm">
          Your data is protected with industry-standard encryption and regular
          security audits to ensure maximum protection.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I switch plans later?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. You can upgrade or downgrade your subscription plan
          anytime based on your needs.
        </div>
      </div>
    </>
  );
};
