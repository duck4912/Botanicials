import { useNavigate } from "react-router";
import { API_URL } from "../const/constants";
import GoogleLogoIcon from "../features/common/components/GoogleLogoIcon";
import { useAuth } from "../features/common/hooks/use-auth";

function LoginPage() {
  const { data: user } = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="bg-lighest-beige flex h-full items-center justify-center px-4">
      <div className="border-dark w-full max-w-[450px] space-y-4 rounded-lg border p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[--color-dark-green]">
            Botanicals
          </h1>
          <p className="text-md mt-2 text-[--color-light-green]">
            Sign in to continue
          </p>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg border border-[--color-light-beige] bg-white px-4 py-3 text-base font-medium text-[--color-dark-green] shadow-sm transition-all duration-150 hover:border-[--color-dark-beige] hover:ring focus:ring-2 focus:ring-[--color-dark-green] focus:ring-offset-2"
        >
          <GoogleLogoIcon className="mr-3 h-5 w-5" />
          Sign in with Google
        </button>

        <p className="mt-4 text-center text-xs text-[--color-light-green]">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
