export function PreviewSection() {
  return <section className="preview-section">
          <div className="general-information-box">
            <img src="/Screenshot from 2022-09-29 00-26-10.png" alt="user profile photo" className="user-photo" />
            <ul className="user-desc">
              <li className='user-name' aria-label='user full name'> Tebibu Solomon</li>
              <li className='user-phone' aria-label='user phone number'> +2519725393</li>
              <li className='user-email' aria-label='user email'> tebibusolmon79@gmail.com</li>
              <li className='user-location' aria-label='user current location'> Wolayta, Sodo, Ethiopia</li>
            </ul>
          </div>
          <div className="education-preview-section">
            <h2>Education</h2>
            <div className="education-review">
              <h4>Urban & Regional planning <span className="edu-level"> Bachelor Degree</span></h4>
              <div className="education-desc">
                <p>Hawassa University</p>
                <p>August 2016 - September 2022 .E.C</p>
              </div>
            </div>
            <hr />
            <div className="education-review">
              <h4>Computer Science <span className="edu-level"> Bachelor Degree</span></h4>
              <div className="education-desc">
                <p>Rift Valley University</p>
                <p>August 2016 - September 2022 .E.C</p>
              </div>
            </div>
          </div>
          <div className="professional-exp">
            <h2>Experiance</h2>
            <div className="professional-desc">
              <p>Company Name: Sodo Municipality</p>
              <p>Position: Planner</p>
              <p>From September 2023 E.C to September 2023 E.C</p>
            </div>
            <hr />
            <div className="professional-desc">
              <p>Company Name: Awash Bank</p>
              <p>Position: programmer</p>
              <p>From September 2023 E.C to September 2023 E.C</p>
            </div>
          </div>

          <div className="skill-desc">
            <ul>
              <li>Adobe PhotoShop</li>
              <li>GIS</li>
              <li>Adobe PhotoShop</li>
              <li>GIS</li>
            </ul>
          </div>
        </section>;
}
  