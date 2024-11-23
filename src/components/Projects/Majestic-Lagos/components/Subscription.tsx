const Subscription = () => {
  return (
    <div className="w-full lg:w-[30%] bg-white p-10 h-min lg:p-5 rounded-lg shadow-md">
      <h2 className="text-sm font-bold">Subscribe Now</h2>
      <div className="w-full">
        <ol className="list-decimal list-inside">
          <li className="text-[9px] mt-3">
            Click the button below to download the subscription form and FAQ
          </li>
          <li className="text-[9px] mt-3">
            Study the form to understand everything about the property
          </li>
          <li className="text-[9px] mt-3">
            Do your due diligence. Visit the site, ask questions, and make
            inquiries
          </li>
          <li className="text-[9px] mt-3">
            Fill the form and submit it to the office
          </li>
          <li className="text-[9px] mt-3">Make payment for the property</li>
          <li className="text-[9px] mt-3">
            Get your receipt and allocation letter
          </li>
        </ol>
      </div>
      <div className="mt-5">
        <span className="text-[8px] leading-0">
          Ready to kickstart this journey? Don't worry we are with you every
          step of the way
        </span>
      </div>
      <div className="mt-5">
        <a href="/assets/subforms/majestic-lagos-subform.pdf" download={true}>
          <button className="w-full px-5 bg-primary text-white text-xs py-2 rounded-md">
            Download Sub Form/FAQ
          </button>
        </a>
      </div>
    </div>
  );
};

export default Subscription;
