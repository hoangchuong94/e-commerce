import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import axios from "@/utils/auth/axios";
import { setAccount } from "@/lib/redux/sliceLogin";
import { JwtUser, StateUserProps, UserProps } from "@/type/type";

export const useRegistration = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const register = async (
    userRegister: UserProps
  ): Promise<StateUserProps | null> => {
    setIsLoading(true);
    setError(null);
    const { fullName, username, phoneNumber, email, password, gender } =
      userRegister;
    try {
      const response = await axios.post("/api/auth/register", {
        fullName,
        username,
        email,
        phoneNumber,
        password,
        gender,
      });
      if (response.status === 200) {
        const data = response.data;
        try {
          const decodedToken: JwtUser = jwtDecode(data.token);
          localStorage.setItem("TOKEN_STORAGE_KEY", data.token);
          const user: StateUserProps = {
            username: decodedToken.sub,
            isAdmin: decodedToken.admin,
            isLogin: true,
          };
          dispatch(setAccount(user));
          return user;
        } catch (error) {
          setError(`Error decoding JWT:", ${error}`);
        }
      } else {
        setError(`Register failed: ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error during Register: ${error}`);
    } finally {
      setIsLoading(false);
    }
    return null;
  };
  return { register, error, isLoading };
};

export const useLogin = function () {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (
    username: string,
    password: string
  ): Promise<StateUserProps | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/auth/authenticate", {
        username,
        password,
      });
      if (response.status === 200) {
        const data = response.data;
        try {
          const decodedToken: JwtUser = jwtDecode(data.token);
          localStorage.setItem("TOKEN_STORAGE_KEY", data.token);
          const user: StateUserProps = {
            username: decodedToken.sub,
            isAdmin: decodedToken.admin,
            isLogin: true,
          };
          dispatch(setAccount(user));
          return user;
        } catch (error) {
          setError(`Error decoding JWT:", ${error}`);
        }
      } else {
        setError(`Login failed: ${response.statusText}`);
      }
    } catch (error) {
      setError(`Error during Login : ${error}`);
    } finally {
      setIsLoading(false);
    }
    return null;
  };
  return { login, error, isLoading };
};

export const getData = () => {
  const token = localStorage.getItem("TOKEN_STORAGE_KEY");
  if (token) {
    axios
      .get("http://localhost:8080/api/home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }
};

const redirecByUserLogin = (user: StateUserProps) => {
  const router = useRouter();
  if (user.isAdmin) {
    router.push("/admin");
  } else {
    router.back();
  }
};
