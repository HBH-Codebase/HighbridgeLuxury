import { Button } from "../ui/button"

const LoginForm = () => {

  const handleSubmit = () => {
    console.log("Submitted!!!")
  };

  return (
    <div className="flex flex-col items-start justify-center mx-auto">
      <h1 className="text-lg lg:text-xl text-center tracking-wider leading-7 font-bold">Partner With Us</h1>
      <div className="flex flex-col gap-4 mt-5 w-full lg:w-[90%] mx-auto">
        <p className="text-sm text-gray-300 font-bold">Please fill out your correct details below</p>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstname" className="text-xs lg:text-sm text-gray-400 leading-7 tracking-wider">
            Firstname
          </label>
          <input type="text" id="firstname" placeholder="Enter your first name..." className="w-full h-8 px-3 outline-0 text-sm text-gray-500 bg-gray-100 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="lastname" className="text-xs lg:text-sm text-gray-400 leading-7 tracking-wider">
            Lastname
          </label>
          <input type="text" id="firstname" placeholder="Enter your last name..." className="w-full h-8 px-3 outline-0 text-sm text-gray-500 bg-gray-100 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telephone" className="text-xs lg:text-sm text-gray-400 leading-7 tracking-wider">
            Telephone
          </label>
          <input type="telephone" id="telephone" className="w-full h-8 px-3 outline-0 text-sm text-gray-500 bg-gray-100 rounded-md" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs lg:text-sm text-gray-400 leading-7 tracking-wider">
            Email
          </label>
          <input type="email" id="email" placeholder="Enter your email..." className="w-full h-8 px-3 outline-0 text-sm text-gray-500 bg-gray-100 rounded-md" />
        </div>
        <Button className="w-[60%] rounded-lg bg-[#5D0265] text-gray-300 mx-auto mt-6" onClick={handleSubmit}>
          Register
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
