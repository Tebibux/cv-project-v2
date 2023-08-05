import { Skill } from './PreviewComponents/Skill';
import { Experiance } from './PreviewComponents/Experiance';
import { Education } from './PreviewComponents/Education';
import { Profile } from './PreviewComponents/Profile';
export function PreviewSection() {
  return <>
    <section className="preview-section " id='my-cv'>
      <Profile />
      <Education />
      <Experiance />
      <Skill />
    </section>
  </>;
}
