import './App.css';
import './css/w3.css'
import Sidebar from './component/sidebar/Sidebar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './component/Homepage';
import ContentContainer from './component/wrapper/ContentContainer';
import Search from './component/search/Search';
import PostList from './component/search/post/PostList';
import displayTime from './component/clock/displayTime';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import {TransContext} from './component/wrapper/Trans';


const App = () => {
  i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to my app!": "Welcome to my React App"
        }
      },
      vi: {
        translation: {
          "Welcome to my app!": "Chào mừng đến với ứng dụng của tôi!"
        }
      }
    },
    lng: "vi",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

  const { t } = useTranslation();

  return<TransContext.Provider value={t}>
    <Router>
      <div className="App w3-row">
    
      <Sidebar />
      <ContentContainer>
          
        <Route path="/" exact component={Homepage}/>
        <Route path="/search" component={Search}/>
        <Route path="/search/:uid/" component={PostList}/>
        <Route path="/clock" component={displayTime}/>
      </ContentContainer>

      </div>
    </Router>
  </TransContext.Provider> 
}

export default App;
