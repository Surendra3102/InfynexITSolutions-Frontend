import EmployerHero from "../components/employers/EmployerHero/EmployerHero";
import EmployerModels from "../components/employers/EmployerModels/EmployerModels";
import EmployerForm from "../components/employers/EmployerForm/EmployerForm";
import RecruitmentProcess from "../components/employers/RecruitmentProcess/RecruitmentProcess";
function Employers() {
  return (
    <>
      <EmployerHero />
      <EmployerModels/>
      <RecruitmentProcess/>
      <EmployerForm/>
    </>
  );
}

export default Employers;