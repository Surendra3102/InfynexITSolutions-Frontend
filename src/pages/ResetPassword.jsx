import AuthLayout from "../components/auth/AuthLayout/AuthLayout";
import ResetPasswordForm from "../components/auth/ResetPasswordForm/ResetPasswordForm";

function ResetPassword() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
}

export default ResetPassword;