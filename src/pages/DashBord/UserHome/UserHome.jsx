import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-full m-4">
            <h2 className="text-3xl">
                Welcome Back, {user.displayName}
            </h2>
        </div>
    );
};

export default UserHome;