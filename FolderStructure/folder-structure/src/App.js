import './App.css';
import { FolderStructure } from './components/FolderStructure';

function App() {

  const folderItems = [
    {
      label: 'Home',
      to: '/'
    },
    {
      label: 'Profile',
      to: '/profile',
      children: [
        {

          label: 'Details',
          to: '/details',
          children: [
            {

              label: 'Location',
              to: '/location'

            }
          ]
        }
      ]
    },
    {
      label: 'Settings',
      to: '/settings',
      children: [
        {
          label: 'Account',
          to: '/account',
        },
        {
          label: 'Security',
          to: '/security',
          children: [
            {
              label: 'Login',
              to: '/login',
            },
            {
              label: 'Register',
              to: '/register',
            }
          ]
        }
      ]
    },
  ]
  return (
    <div style={{height:'100vh' , backgroundColor:'aqua' , width:'25vw'}}>
      <FolderStructure folderItems={folderItems} />
    </div>
  );
}

export default App;
