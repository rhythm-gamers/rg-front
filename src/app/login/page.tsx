"use client";

import FullScreenSection from "@/components/public/atoms/FullScreenSection/FullScreenSection";
import useInput from "@/hooks/useInput";
import Checkbox from '../../components/public/atoms/Checkbox/Checkbox';
import Link from "next/link";

const Login = () => {

  const [userEmail, changeUserEmail] = useInput({
    type: "text",
    initValue: "",
    notIncludes: ["space"]
  });

  const [userPassword, changeUserPassword] = useInput({
    type: "text",
    initValue: "",
    notIncludes: ["space"]
  });
  
  const [isRemember, changeIsRemember] = useInput({
    type: "checkbox",
    initValue: false,
  })

  return <FullScreenSection direction={"row"} className="flex justify-center items-center">
    <div className="flex flex-col justify-center items-center border rounded-3xl border-[#39c5bb] p-10 gap-4">
      <h3 className="text-3xl mb-4">Login</h3>
      <input type="email" value={userEmail} placeholder="Email" onChange={changeUserEmail}/>
      <input type="password" value={userPassword} placeholder="Password" onChange={changeUserPassword}/>
      <div className="flex justify-between">
         <Checkbox value={"Remember me"} checked={isRemember} onChange={changeIsRemember}/>
         <Link href={"/"}>Forgot Password?</Link>
      </div>
      <button className="border rounded-3xl border-[#39c5bb] w-full py-2">Login</button>
      <div>
        Don't have an account?
        <Link href={"/"}> Register</Link>
      </div>
    </div>
  </FullScreenSection>;
};

export default Login;
