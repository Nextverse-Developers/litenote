import './App.css';
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import Layout from './components/common/Layout';
import Home from './Pages/Home';
import NotFound from "./Pages/NotFound"
import LoginPage from './Pages/Login';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './Pages/TermsAndConditionsPage';
import RegisterPage from './Pages/Register';
import VerifyPage from "./Pages/Verify"
import ProfilePage from './Pages/Profile';
import FeedPage from "./Pages/Feed"
import ExplorePage from "./Pages/ExplorePage"
import { useState, useRef, useEffect } from "react"
import AnalyticsPage from "./Pages/Dashboard/AnalyticsPage"
import UsersPage from "./Pages/Dashboard/UsersPage"
import SettingsPage from "./Pages/Dashboard/SettingsPage"
import PublishPage from './Pages/Dashboard/PublishPage';
import ReportsPage from './Pages/Dashboard/ReportsPage';
import DashboardLayout from './components/Dashboard/common/DashboardLayout';
import DashboardProfilePage from "./Pages/Dashboard/DashboardProfilePage"
import BookmarksPage from './Pages/Dashboard/BookmarksPage';
import NotificationsPage from './Pages/Dashboard/NotificationsPage';
import JoinWaitingListPage from './Pages/JoinWaitingListPage';
import MessagesPage from "./Pages/Dashboard/MessagesPage"
import StoryPage from './Pages/StoryPage';
import NoteReaderPage from './Pages/NoteReaderPage';
import LoadingPage from './Pages/LoadingPage';
import FollowPage from './Pages/FollowPage';
import SearchPage from "./Pages/SearchPage"
import { useAuthContext } from './hooks/useAuthContext';
import { useThemeContext } from './hooks/useThemeContext';
import DevelopersPage from "./Pages/DevelopersPage"
function App() {
  console.log("dave")
  const location = useParams()
  const { colorMode } = useThemeContext()
  useEffect(() => {
switch (location["*"]) {
  case "":
    document.body.classList.add('body-height-override');
    break;
  default:
    document.body.classList.remove('body-height-override');
    break;
}
if(location["*"]  !== ""){
  switch (colorMode) {
    case "dark-mode":
      document.body.classList.add("dark-theme-variables")
      break;
      case "light-mode":
          document.body.classList.remove("dark-theme-variables")
      break;
  }
}

  }, [location, colorMode])
  const { user, appLoading } = useAuthContext()
  const sidebarRef = useRef()
  const [dashboardToast, setDashboardToast] = useState(false)
  let appReady = true
  return (
    
    <>
{ appReady ?   <Routes>
  <Route path="/" element={<Layout className="pages"/>}>
<Route index element={<Home/>    } />
<Route path="profile/:username" 
    element={
          appLoading ? (
        <LoadingPage />
          ) : user ? (
            <ProfilePage />
          ) : (
            <Navigate to="/login" replace/>
          )
        }
/>
<Route path="explore" 
    element={
          appLoading ? (
        <LoadingPage />
          ) : user ? (
            <ExplorePage />
          ) : (
            <Navigate to="/login" replace/>
          )
        }
/>
<Route path="explore/search" 
    element={
          appLoading ? (
        <LoadingPage />
          ) : user ? (
            <SearchPage />
          ) : (
            <Navigate to="/login" replace/>
          )
        }
/>
  <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
    <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
  </Route>
  <Route path="feed" 
    element={
          appLoading ? (
        <LoadingPage />
          ) : user ? (
            <FeedPage />
          ) : (
            <Navigate to="/login" replace/>
          )
        }
/>
<Route path="story/:username/:title/:id" 
    element={
          appLoading ? (
        <LoadingPage />
          ) : user ? (
            <StoryPage />
          ) : (
            <Navigate to="/login" replace/>
          )
        }
/>
<Route path="follow-suggestions" 
    element={
          appLoading ? (
        <LoadingPage />
          ) : user ? (
            <FollowPage />
          ) : (
            <Navigate to="/login" replace/>
          )
        }
/>
  <Route path="our-developers" element={<DevelopersPage />} />
  {/* <Route path="privacy-policy" element={<PrivacyPolicyPage />} /> */}
  <Route path="login" element={<LoginPage />} />
  <Route path="note/:email/:id" element={ <NoteReaderPage />} />
  <Route path="dashboard" element={ <DashboardLayout sidebarRef={sidebarRef} dashboardToast={dashboardToast} setDashboardToast={setDashboardToast}/>}>
          <Route path="bookmarks" element={<BookmarksPage sidebarRef={sidebarRef} />}/>
          <Route path="notifications" element={<NotificationsPage  sidebarRef={sidebarRef} />}/>
          <Route path="analytics" element={
            user?.role == "admin" ? 
            <AnalyticsPage sidebarRef={sidebarRef} />
            :
            <Navigate to="/notfound" replace/>
            }/>
          <Route path="users" element={
            user?.role == "admin" ? 
            <UsersPage sidebarRef={sidebarRef} />
            :
            <Navigate to="/notfound" replace/>
            }/>
          <Route path="settings" element={<SettingsPage  sidebarRef={sidebarRef} />}/>
          <Route path="publish" element={<PublishPage  sidebarRef={sidebarRef} />}/>
          <Route path="reports" element={
            user?.role == "admin" ? 
            <ReportsPage sidebarRef={sidebarRef} />
            :
            <Navigate to="/notfound" replace/>
            }/>
          <Route path="profile" element={<DashboardProfilePage  sidebarRef={sidebarRef} />}/>
          <Route path="messages" element={<MessagesPage  sidebarRef={sidebarRef} />}/>
        </Route>

<Route path="register" element={<RegisterPage />} />
<Route path="verify/:email/:token" element={<VerifyPage />}/>
  <Route  path="*" element={<NotFound/>}/>
</Routes> : <JoinWaitingListPage />
}
    </>
  )
}

export default App
