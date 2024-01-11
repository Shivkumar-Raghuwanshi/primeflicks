import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/options";
import { RegisterForm } from "@/components/RegisterForm";
import { redirect, useRouter } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/home");

  return (
    <div
      className="relative bg-no-repeat bg-center bg-fixed bg-cover w-full h-full sm:h-screen"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className=" w-full h-full md:h-screen px-8 md:px-40 lg:px-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-slate-950 p-5 rounded-3xl w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 text-white">
            <RegisterForm />
            <div className="font-normal text-sm mt-5 text-center">
              <Link href={"/login"}>
                Already have an account {"  "}
                <span className="underline">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
