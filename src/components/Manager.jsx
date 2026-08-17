import { defineElement } from "@lordicon/element";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

defineElement();

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  const getPass = async () => {
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setpasswordArray(passwords);
    
  }
  

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getPass();
    
  }, []);

  const showPass = () => {
    if (
      ref.current.src === "src/assets/wired-lineal-69-eye-hover-lashes.json"
    ) {
      ref.current.src = "src/assets/wired-lineal-69-eye-hover-look-around.json";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "src/assets/wired-lineal-69-eye-hover-lashes.json";

      passwordRef.current.type = "password";
    }
  };

  const SavePass = async () => {
    if(form.site.length >3 && form.username.length >3 && form.password.length >3){
      if (form.id) {
        await fetch("http://localhost:3000/", {method: "PUT", headers:{"Content-Type": "application/json"}, body: JSON.stringify(form)})
      } else {
        await fetch("http://localhost:3000/", {method: "POST", headers:{"Content-Type": "application/json"}, body: JSON.stringify({...form, id: uuidv4()})})
      }
    await getPass();
    setform({ site: "", username: "", password: "" });
    toast('Password Saved', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Slide",
      });
    }else{
      toast('Error: Password Not Saved')
    }
  };

  const DeletePass = async (id) => {
    // eslint-disable-next-line no-unused-vars
    let res = await fetch("http://localhost:3000/", {method: "DELETE", headers:{"Content-Type": "application/json"}, body: JSON.stringify({ id })})
    await getPass();
    toast('Password Deleted Succesfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Slide",
      });
  };

  const EditPass = (id) => {
    setform(passwordArray.filter((item) => item.id === id)[0]);
    setpasswordArray(passwordArray.filter(item => item.id !== id))
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copytext = (text) => {
    toast('Copied to Clipboard', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Slide",
      });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition="Slide"
      />
      <div>
        <div className="relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-linear-to-b [&>div]:from-emerald-200 [&>div]:to-white"></div>
      </div>

      <div className="md:mx-auto md:max-w-4xl rounded-lg md:p-4 min-h-[85vh]">
        <div className="headings px-6 text-center bg-green-50 ">
          <h1 className="text-4xl font-bold ">
            &lt;<span className="text-green-700">Pass</span>
            <span className="text-indigo-700">Man/</span>&gt;
          </h1>
          <p className="text-green-800 text-lg text-center">
            Your Own Password Manager
          </p>
        </div>
        <div className="text-black flex flex-col p-4 items-center bg-green-50  ">
          <input
            onChange={handleChange}
            value={form.site}
            placeholder="Enter Website URL"
            type="text"
            name="site"
            id=""
            className="bg-green-200 m-3 p-3 border border-black rounded-2xl hover:border-2 w-full"
          />
          <div className="flex w-full md:flex-row flex-col justify-between md:gap-2">
            <input
              onChange={handleChange}
              value={form.username}
              placeholder="Enter Username"
              type="text"
              name="username"
              id="username"
              className="bg-green-200 my-4 p-3 border w-full border-black rounded-2xl hover:border-2"
            />
            <div className="relative">
              <input
                ref={passwordRef}
                onChange={handleChange}
                value={form.password}
                placeholder="Enter Password"
                type="password"
                name="password"
                id="password"
                className="bg-green-200 my-4 p-3 pr-8 border w-full border-black rounded-2xl hover:border-2"
              />
              <span
                className="absolute right-2 top-7 w-7 hover:cursor-pointer"
                onClick={showPass}
              >
                <lord-icon
                  ref={ref}
                  trigger="loop"
                  src="src/assets/wired-lineal-69-eye-hover-lashes.json"
                ></lord-icon>
              </span>
            </div>
          </div>
          <button
            onClick={SavePass}
            className="text-lg bg-green-300 flex items-center gap-2 justify-center w-fit p-2 rounded-3xl hover:bg-green-400 hover:font-bold hover:cursor-pointer"
          >
            <lord-icon
              trigger="hover"
              src="/src/assets/wired-lineal-49-plus-circle-hover-rotation.json"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="password-list bg-green-50 ">
          <div className="h-px bg-black"></div>
          <h2 className="font-bold m-2 text-xl text-green-950 ">
            Your Passwords
          </h2>
          <div className="h-px bg-black"></div>

          {passwordArray.length === 0 && (
            <div className="text-center text-red-800 font-bold text-lg my-3">
              No Passwords Found
            </div>
          )}
          {passwordArray.length != 0 && (
            <div className="w-full overflow-x-auto">
              <table className="md:table-auto md:w-full table-fixed my-3 overflow-hidden rounded-lg p-3 min-w-150 md:min-w-0">
                <thead className="text-xl bg-green-200">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>

                <tbody className="bg-green-100">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center py-2 truncate max-w-25">
                          <div className="flex gap-2 items-center justify-center px-5">
                            <a href={item.site} target="_blank">
                              {item.site}{" "}
                            </a>{" "}
                            <lord-icon
                              onClick={() => {
                                copytext(item.site);
                              }}
                              trigger="click"
                              src="src/assets/system-outline-362-article-hover-article.json"
                              className="hover:cursor-pointer"
                            ></lord-icon>
                          </div>{" "}
                        </td>
                        <td className="text-center py-2 truncate max-w-25">
                          <div className="flex gap-2 items-center justify-center px-5">
                            <span>{item.username}</span>
                            <lord-icon
                              onClick={() => {
                                copytext(item.username);
                              }}
                              trigger="click"
                              src="src/assets/system-outline-362-article-hover-article.json"
                              className="hover:cursor-pointer"
                            ></lord-icon>
                          </div>
                        </td>
                        <td className="text-center py-2 truncate max-w-25">
                          {" "}
                          <div className="flex gap-2 items-center justify-center px-5">
                            <span>{item.password}</span>
                            <lord-icon
                              onClick={() => {
                                copytext(item.password);
                              }}
                              trigger="click"
                              src="src/assets/system-outline-362-article-hover-article.json"
                              className="hover:cursor-pointer"
                            ></lord-icon>
                          </div>
                        </td>
                        <td className="text-center py-2 flex justify-center items-center gap-2">
                          {" "}
                          <span>
                            <lord-icon
                              trigger="click"
                              onClick={() => {
                                DeletePass(item.id);
                              }}
                              src="src/assets/wired-lineal-185-trash-bin-hover-empty.json"
                              className="hover:cursor-pointer"
                            ></lord-icon>
                          </span>
                          <span>
                            <lord-icon
                              trigger="click"
                              onClick={() => {
                                EditPass(item.id);
                              }}
                              src="src/assets/doodle-black-35-pencil-hover-circle.json"
                              className="hover:cursor-pointer"
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;