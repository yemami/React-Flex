import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-gray-500 h-screen">
      <div className="bg-white w-[100vw] h-[15vh]">sime</div>
      <div className="bg-pink-200 w-[100vw] h-[15vh]">Nav</div>
      <div className="md:flex  ">
        <div className="bg-blue-300 w-[100vw] h-[15vh] md:w-[50%] ">
          Sidebar
        </div>
        <div>
          <div className="bg-green-300 w-[100vw] h-[15vh] md:h-[7.5vh] md:w-[50vw]">
            Article1
          </div>
          <div className="bg-gray-100 w-[100vw] h-[15vh] md:h-[7.5vh] md:w-[50vw]">
            Article2
          </div>
        </div>
      </div>
      <div className="bg-pink-400 w-[100vw] h-[15vh]">Footer</div>
    </div>
  );
}

export default App;
