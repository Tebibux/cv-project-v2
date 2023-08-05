export function Profile() {
  return <div className="general-information-box">
    <img src="/Screenshot from 2022-09-29 00-26-10.png" alt="user profile photo" className="user-photo" />
    <ul className="user-desc">
      <li className='user-name' aria-label='user full name'> Tebibu Solomon</li>
      <li className='user-phone' aria-label='user phone number'> +2519725393</li>
      <li className='user-email' aria-label='user email'> tebibusolmon79@gmail.com</li>
      <li className='user-location' aria-label='user current location'> Wolayta, Sodo, Ethiopia</li>
    </ul>
  </div>;
}
