import '../index.css';

function Login() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[400px] border rounded-lg text-center">
                <p className="font-bold text-[25px] text-blue-400 m-3">Login</p>
                <p className="text-gray-300">input your ID with 4 number</p>
                <input
                    type="password"
                    id="password"
                    className="text-gray-900 text-center text-sm border-2 border-gray-300 rounded-lg p-3 m-5 hover:border-blue-400"
                />
            </div>
        </div>
    );
}

export default Login;
