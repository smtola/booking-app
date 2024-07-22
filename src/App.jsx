import './App.css';
import BookingDetail from './components/BookingDetail';
import BookingMenu from './components/BookingMenu';

function App() {

  return (
    <>
      <div className='max-w-screen-sm bg-[#f797a3ca] min-h-screen p-3 shadow-2xl'>
        <BookingDetail />
      </div>
      <BookingMenu />
    </>
  )
}

export default App
