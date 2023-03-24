import { useEffect } from "react";
import { getCookie } from "cookies-next";
import Router from "next/router";
import { toast } from "react-toastify";
import { getProfile } from "../Components/http-services/get-profile";

export default function Home() {
  const checkToken = async () => {
    try {
      await getProfile();
      Router.push("/sliders-list");
    } catch (error) {
      toast.success("لطفا توکن معتبری دریافت کنید");
    }
  };
  useEffect(() => {
    checkToken();
  }, []);

  return <div></div>;
}
