import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="w-full lg:w-[30%] flex flex-col gap-4">
      <div className="w-full bg-white p-10 h-min lg:p-5 rounded-lg shadow-md">
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
          <Button
            className="w-full px-5 bg-primary text-white text-xs py-2 rounded-md"
            asChild
          >
            <a
              href="/assets/subforms/majestic-lagos-subform.pdf"
              download={true}
            >
              Download Sub Form/FAQ
            </a>
          </Button>
        </div>
      </div>
      <div className="w-full bg-white p-10 h-min lg:p-5 rounded-lg shadow-md">
        <h2 className="text-sm font-semibold mb-3">Read to explore majesty?</h2>
        <Button type="button" asChild>
          <Link
            to="https://www.highbridgehomesltd.com/book-inspection/"
            target="blank"
            className="w-full px-5 bg-primary text-white text-xs py-2 rounded-md"
          >
            Book Inspection
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Subscription;
