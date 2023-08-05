/* eslint-disable react/prop-types */
import { Skill } from './PreviewComponents/Skill';
import { Experiance } from './PreviewComponents/Experiance';
import { Education } from './PreviewComponents/Education';
import { Profile } from './PreviewComponents/Profile';
export function PreviewSection({ profileSelected, generalInformation }) {
  return <>
    <section className="preview-section " id='my-cv'>
      <Profile
        profileSelected={profileSelected}
        generalInformation={generalInformation}
      />
      <Education />
      <Experiance />
      <Skill />
    </section>
  </>;
}
