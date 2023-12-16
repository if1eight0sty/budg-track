import InputField from "../../components/input-field";

const Register = () => {
  // handlers
  const handleOnChange = (e) => {
    // setData({ ...data, [e.target.name]: e.target.value });
  };
  // handlers for form submit event
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main className="flex items-center justify-center w-full h-screen">
        <section className="min-[900px]:flex-1 hidden min-[900px]:block min-[900px]:border-r h-screen "></section>
        <section className="relative flex-1 h-screen overflow-hidden isolate">
          <form className="flex items-center justify-center w-full h-screen backdrop-blur-md ">
            <div className="flex flex-col items-center px-4 py-4 w-[20em] min-[500px]:w-[25em] min-[650px]:w-[27em]">
              <h1 className="mb-8 text-2xl font-bold text-gray-600">
                Register
              </h1>
              <div className="flex flex-col w-full gap-y-4">
                <InputField
                  label="name"
                  icon="memory:email"
                  type="text"
                  name="name"
                  id="name"
                  //   value={data.username}
                  onChange={handleOnChange}
                  placeholder={"Type your username"}
                />
                <InputField
                  label="Email"
                  icon="memory:email"
                  type="email"
                  name="email"
                  id="username"
                  //   value={data.username}
                  onChange={handleOnChange}
                  placeholder={"Type your email"}
                />
                <InputField
                  label="Password"
                  icon="pixelarticons:lock"
                  type="password"
                  name="password"
                  id="password"
                  //   value={data.password}
                  onChange={handleOnChange}
                  placeholder={"Type your password"}
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 mt-8 text-lg font-semibold text-white rounded bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 hover:shadow-lg"
                onClick={handleOnSubmit}
              >
                Register
              </button>
            </div>
          </form>
          <div className="w-[5em] h-[5em] bg-sky-500/70 rounded-full absolute z-[-1] top-20 left-10"></div>
          <div className="w-[20em] h-[20em] bg-rose-500/70 rounded-full absolute z-[-1] bottom-[-7em] right-[-7em]"></div>
          <div className="w-[10em] h-[10em] bg-green-500/70 rounded-full absolute z-[-1] top-[-5em] right-[-5em]"></div>
          <div className="w-[15em] h-[15em] bg-yellow-500/70 rounded-full absolute z-[-1] bottom-[-10em] left-[-10em]"></div>
          <div className="w-[8em] h-[8em] bg-purple-500/70 rounded-full absolute z-[-1] bottom-[-3em] right-[-3em]"></div>
        </section>
      </main>
    </>
  );
};

export default Register;
