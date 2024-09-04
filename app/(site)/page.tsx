import Image from "next/image";
import AuthForm from "./components/AuthForm"

export default function Home() {
  return (
    <div 
        className="
            
            flex
            min-h-full
            flex-col
            justify-center
            py-12
            sm:px-6
            lg:px-8
            bg-grey-100
            ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
                alt="logo"
                height="300"
                width="300"
                className="mx-auto w-auto"
                src="/images/logo.png"
            />

            <h2
                className="
                    mt-6
                    text-center
                    text-3xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    ">
                        Sign in to Your Account
                    </h2>
        </div>
        <AuthForm/>
    </div>
  );
}
