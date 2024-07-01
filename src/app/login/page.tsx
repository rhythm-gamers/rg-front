"use client";

import FullScreenSection from "@/components/public/atoms/FullScreenSection/FullScreenSection";
import useInput from "@/hooks/useInput";
import Checkbox from '../../components/public/atoms/Checkbox/Checkbox';
import Link from "next/link";
import AuthAPI from "@/api/auth";
import { FormEvent } from "react";
import CustomBtn from '../../components/public/atoms/CustomBtn/CustomBtn';
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter()
  
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

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await AuthAPI.login({
      username: userEmail,
      password: userPassword,
    })

    router.push('/')
  }

  return (
    <div className="w-full h-full bg-gradient-to-r from-rose-400 to-orange-200 relative">
  <FullScreenSection direction={"row"} className="text-white flex justify-center items-center">
    <form className="w-1/5 backdrop-blur-2xl flex flex-col justify-center items-center border-2 rounded-3xl border-bright-cream-1 p-10 gap-4 shadow-lg" onSubmit={login}>
      <h3 className="text-3xl mb-4">로그인</h3>
      <input className="bg-transparent border-2 rounded-3xl border-bright-cream-1 w-full px-4 py-2 placeholder-white focus:outline-white" type="text" value={userEmail} placeholder="Email" onChange={changeUserEmail}/>
      <input className="bg-transparent border-2 rounded-3xl border-bright-cream-1 w-full px-4 py-2 placeholder-white focus:outline-white" type="password" value={userPassword} placeholder="Password" onChange={changeUserPassword}/>
      <div className="w-full flex justify-between">
        <Checkbox value={"아이디 저장"} checked={isRemember} onChange={changeIsRemember}/>
        <Link href={"/"}>비밀번호 찾기</Link>
      </div>
      <CustomBtn className="bg-bright-cream-1 text-black" size={"md"} type={"clear"} roundedFull widthFull haveShadow>로그인</CustomBtn>
      <div className="w-full flex justify-center">
        계정이 없으신가요?
        <Link className="mx-4" href={"/"}>회원가입</Link>
      </div>
    </form>
  </FullScreenSection>
  </div>
  )
};

export default Login;
