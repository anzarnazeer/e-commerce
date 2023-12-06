import { dexa, faceBook } from "../assets"

const customerData = [
  { id: 1, name: "Returns & Warranty" },
  { id: 2, name: "Payment" },
  { id: 3, name: "Shipping" },
  { id: 4, name: "Terms & Services" }
]

const socialMediaImage = [
  { id: 1, image: faceBook },
  { id: 2, image: faceBook },
  { id: 3, image: faceBook },
  { id: 4, image: faceBook },
]

const App = () => {
  return (
    <div className="App">
        <div className="wrapper">
        <div className='main-container'>
        <div className="footer-div">
            <div className="footer-logo">
                <div className="footrelogo-cont">
                    <img src={dexa} alt="" />
                </div>
            <p className="site">Site Name</p>
            </div>
          
          <p className="p-style">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          <div className='social-media'>
          {socialMediaImage?.map((item) => {
            const { image } = item
            return (
                <span className='logo'>
                  <img src={image} alt="facebook" />
                </span>
            )
          })}
           </div>
        </div>
        <div className="support">
          <p className="customer ">Customer Support</p>
          {customerData?.map((item) => {
            const { name } = item
            return (
              <div>
                <ul className="className-container" >
                  <li className="className-list" >{name}</li>
                </ul>
              </div>
            )
          })}
        </div>
        <div>
          <p className="customer">Corporate Info</p>
          {customerData?.map((item) => {
            const { name } = item
            return (
              <div>
                <ul className="className-container">
                  <li className="className-list" >{name}</li>
                </ul>
              </div>
            )
          })}
        </div>
        <div>
          <p className="customer">Gift Card</p>
          {customerData?.map((item) => {
            const { name } = item
            return (
              <div>
                <ul className="className-container">
                  <li className="className-list" >{name}</li>
                </ul>
              </div>
            )
          })}
        </div>
        <div>
          <p className="customer">Location</p>
          <ul className="className-container">
                  <li className="className-list" >united state</li>
                </ul>       
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default App;