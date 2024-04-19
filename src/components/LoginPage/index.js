import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import { useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { RiLoginBoxFill } from "react-icons/ri";
import './index.css'

const LoginPage = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(auth)
  }, [])

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="overall-container2">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="login-heading">
              Login to Order Food
            </h1>
            {showOTP ? (
              <>
                <div className="content-align">
                    <div>
                    <BsFillShieldLockFill size={30} />
                    </div>
                    <label
                    htmlFor="otp"
                    className="verify-ph-num-text"
                    >
                    Enter your OTP
                    </label>
                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    OTPLength={6}
                    otpType="number"
                    disabled={false}
                    autoFocus
                    className="opt-container "
                    ></OtpInput>
                    <div className="align">
                        <button
                            onClick={onOTPVerify}
                            className="login-btn"
                            >
                            {loading && (
                                <CgSpinner size={20} className="mt-1 animate-spin" />
                            )}
                            <span>Verify OTP</span>
                        </button>
                    </div>
                </div>
              </>
            ) : (
              <>
                <div className="content-align">
                    <p className="verify-ph-num-text"><RiLoginBoxFill /> Verify your phone number </p>
                    <PhoneInput country={"in"} value={ph} onChange={setPh}/>
                    <div className="align">
                        <button
                        onClick={onSignup}
                        className="login-btn"
                        >
                        {loading && (
                            <CgSpinner size={20} className="mt-1 animate-spin" />
                        )}
                        <span>Send code via SMS</span>
                        </button>
                    </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginPage;
