import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      className="font-bold hover:text-orange-500 hover:bg-white"
      variant="ghost"
      onClick={async () => await loginWithRedirect()}
    >
      Log in
    </Button>
  );
};

export default MainNav;
