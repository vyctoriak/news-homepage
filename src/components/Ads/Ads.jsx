import './Ads.scss';
import desktop from '../../assets/images/image-web-3-desktop.jpg';

function Ads() {
  return (
    <div class="container">
      <div class="news">news</div>
      <div class="image">
        <img src={desktop} alt="desktop image" />
      </div>
      <div class="questions">
        <div className="title">
          <span>The Bright Future of Web 3.0?</span>
        </div>
        <div className="read">read</div>
      </div>
    </div>
  );
}

export default Ads;
