import './About.css';
import IMG_888 from  './imageA/IMG_888.jpeg';

const About = () => {
  return (
  <div className="About">
    <div>
      <p>
        楊絮心
        (Yeung Sui Sum)<br />
        此網頁由本人寫出
      </p>
      <p>
        2002年3月8日 香港<br />
        Programmer & CG Illustrator
      </p>
    </div>
    <div className='P'>
    8年電腦繪圖經驗 13歲開始使用Sai作畫<br />
    中學時期參加各種創天同人展販賣作品<br />
    現今活躍於接委託<br />
    跟商界 個別人士合作建立Project<br />
    例如遊戲設計 宣傳圖等
    </div>

    <div className='Tale'>
      <p>
        使用軟件為 PhotoShop, Clip Studio Paint
      </p>
      <p>
         
        聯絡請郵件:ehiruac@gmail.com
      </p>
      <img src={IMG_888} className='IMG_888'/>
    </div>

    </div>
  )
};

export default About;
