import { softSkills, engineeringSkills } from '../../../data';
import SkillCard from '../../cards/SkillCard';
import TitleCard from '../../cards/TitleCard';
import SkillBulletPoint from './SkillBulletPoint';

const Skills = () => {
  const softSkillsList = (
    <>
      {softSkills.map(skill => (
        <SkillBulletPoint key={skill} text={skill} />
      ))}
    </>
  );
  const engineeringSkillsList = (
    <>
      {engineeringSkills.map(skill => (
        <SkillBulletPoint key={skill} text={skill} />
      ))}
    </>
  );

  return (
    <div className="flex flex-col items-center p-2  sm:p-16 ">
      <TitleCard text="Skills" />
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start  w-11/12 py-8">
        <SkillCard
          title={'Engineering skills'}
          skillsList={engineeringSkillsList}
        />
        <SkillCard title={'Soft skills'} skillsList={softSkillsList} />
      </div>
    </div>
  );
};

export default Skills;
