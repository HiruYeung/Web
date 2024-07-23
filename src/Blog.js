import IMG_0031 from './imageB/IMG_0031.PNG';
import IMG_0131 from './imageB/IMG_0131.jpeg';
import IMG_0231 from  './imageB/IMG_0231.jpeg';

import './Blog.css';

import IMG_7297 from './imageBB/IMG_7297.JPG';
import IMG_072 from './imageBB/IMG_072.jpeg';
import IMG_172 from './imageBB/IMG_172.jpeg';
import IMG_272 from './imageBB/IMG_272.jpeg';

import IMG_0030 from './imageBBB/IMG_0030.PNG';
import IMG_3035 from './imageBBB/IMG_3035.JPG';
import IMG_3036 from './imageBBB/IMG_3036.JPG';

import IMG_3033 from './imageBBBB/IMG_3033.JPG';
import IMG_3034 from './imageBBBB/IMG_3034.JPG';
import IMG_5628 from './imageBBBB/IMG_5628.PNG';




const Blog = () => {
  return (
    <>

      <div className='container1'>
        <div>
          <img src={IMG_0031} className="IMG_0031" />
        </div>
        <div>
          <img src={IMG_0131} className="IMG_0131" />
          <p>2021-6-11</p>
        </div>
        <div>
          <p></p>
          <img src={IMG_0231} className="IMG_0231" />
        </div>
      </div>
      <div className='container2'>
        <div>
          <img src={IMG_172} className="IMG_172" />
        </div>
        <div>
          <p>2021-5-23</p>
          <img src={IMG_272} className="IMG_272" />
          <img src={IMG_072} className="IMG_072" />

        </div>
        <div>
          <img src={IMG_7297} className="IMG_7297" />
        </div>
      </div>
      <p>2017-8-19</p>
      <div className='container3'>
        <div>
          <img src={IMG_3035} className="IMG_3035" />
        </div>
        <div>
          <img src={IMG_0030} className="IMG_0030" />
        </div> 
        <div>
          <img src={IMG_3036} className="IMG_3036" />
        </div>
      </div>
      <p>2017-7-6</p>
      <div className='container4'>
        <div className='container4'>
          <img src={IMG_3033} className="IMG_3033" />
          <img src={IMG_3034} className="IMG_3034" />
        </div>
      </div>
       <div>
          <img src={IMG_5628} className="IMG_5628" />
        </div>
    </>
  );
};

export default Blog;
