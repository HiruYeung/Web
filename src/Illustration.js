import IMG_0666 from './imageL/IMG_0666.jpeg';
import IMG_8080 from './imageL/IMG_8080.jpeg';
import IMG_5577 from './imageL/IMG_5577.PNG';
import IMG_0029 from './imageL/IMG_0029.PNG';



import './Illustration.css';

const Illustration = () => {
    return (
      <>
      <div className='container1'>
          <div>
            <img src={IMG_0666} className="IMG_0666" />
          </div>
          <div>
            <img src={IMG_8080} className="IMG_8080" />
          </div>
      </div>
      <div className='container2'>
          <div>
            <img src={IMG_5577} className="IMG_5577" />
            <img src={IMG_0029} className="IMG_0029" />
          </div>
      </div>
    </>
    );
  };

export default Illustration;