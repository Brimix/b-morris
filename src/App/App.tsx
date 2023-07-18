import Footer from './Footer';
import LinksBrief from './LinksBrief';
import creatorProfileImage from '../../img/20210705_171351.jpg';
import './App.scss';

const App = () => {
  return (
    <div className="main-page">
        <div className="main-page__body">
          <div className="main-page__picture">
            <img src={creatorProfileImage} alt="Pibe fachero" />
          </div>
          <div className="main-page__content">
            <LinksBrief/>
          </div>
        </div>
        <div className="main-page__footer">
          <Footer/>
        </div>
    </div>
  );
};

export default App;
