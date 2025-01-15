import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";

const Home = () => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');
  const createNewRoom = (e) => {
    console.log('1111')
    e.preventDefault()
    const id = uuidV4();
    setRoomId(id);
    console.log(id)
    toast.success('Created new Room')
  };
  return (
    <div className="flex items-center justify-center h-screen text-white bg-[#1c1e29]">
      <div className="bg-[#282a36] p-8 rounded-lg w-full md:w-96">
        <img src="/public/code-sync.png" alt="logo code-sync" />
        <h4>Paste the Invitation ROOM ID</h4>
        <div>
          <input type="text" className="border-2 text-black" placeholder="ROOM ID:" value={roomId} onChange={(e)=>setRoomId(e.target.value)}/>
          <input type="text" placeholder="USERNAME" className="border-2 text-black" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          <button className=""></button>
          <span className="">
            If you don't have an invite then create &nbsp;
            <a href="" onClick={createNewRoom}>New Room</a>
          </span>
        </div>
      </div>
      <footer className="fixed bottom-0">
        <h4>
          Built with 💛 &nbsp; by <a href="">Virat</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
