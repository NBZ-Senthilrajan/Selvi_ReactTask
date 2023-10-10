import '../css/sampleTask.css'
import taskimg from '../image/taskimg.png'
import icon from '../image/reactIcon.png'

function SampleTask (){

return(
    <>
    <div className='d-flex'>
    <div className='boxContainer'>
    <div className='boxContainer1'>
  <div className=' icon d-flex'>
    <img src={icon} alt="" />
  <div className='search1'>
    <div className='circle'></div>
   <input type="search" placeholder="search for anything..." />
   </div>
  </div>
    <div className=" sampleBoxes d-flex  ">
    <div className="sampleBox">
        <h5>Sample 1</h5>
        <h6>02-01-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 2</h5>
        <h6>02-02-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 3</h5>
        <h6>02-03-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 4</h5>
        <h6>02-04-0002</h6>
       <a href="">view sample list</a>
       <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 5</h5>
        <h6>02-05-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    </div>

    <div className="d-flex mt-3">
    <div className="sampleBox">
        <h5>Sample 6</h5>
        <h6>02-06-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 7</h5>
        <h6>02-07-0002</h6>
       <a href="">view sample list</a>
    </div>
    <div className="sampleBox">
        <h5>Sample 8</h5>
        <h6>02-08-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 9</h5>
        <h6>02-09-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    <div className="sampleBox">
        <h5>Sample 10</h5>
        <h6>02-10-0002</h6>
        <a href="">view sample list</a>
        <img src={taskimg} alt="img" />
    </div>
    </div>
    
   

    <div className="boxContent">
        <div className='samImg'>
            <h1>Sample 1</h1>
            <div><img src={taskimg} alt="img" /></div>
        </div>
       <div className=' para1 d-flex'>
        <h6>SAMPLE  <br /> Date</h6>
        <div>
        <button></button>
        <div className='downLine1'></div>
        <div className='sideLine'></div>
        </div>
        <span></span>
        <p>Lorem ipsum dolor sit <br /> amet</p>
        <div className='paraLine'></div>
        </div> 

        <div className='para2 d-flex'>
        <h6>02-02-0002</h6>
        <button></button>
        <p>Lorem ipsum dolor sit <br /> amet</p>
        <div className='paraLine'></div>
        </div> 

        <div className='para3 d-flex'>
        <h6>10-02-0002</h6>
        <button></button>
        <p>Lorem ipsum dolor sit <br /> amet</p>
        <div className='paraLine'></div>
        </div> 

        <div className='para4 d-flex'>
        <h6>13-02-0002</h6>
        <button></button>
        <p>Lorem ipsum dolor sit <br /> amet</p>
        <div className='paraLine'></div>
        </div> 
        <div className='para5 d-flex'>
            <button></button>
            <h6>SAMPLE  <br /> Date</h6>
        </div>
    </div>
    </div>
    </div>

    <div className='sideHeading1'>
        <h3>Sample text 1</h3>
    </div>
   
    
     <div className='sideHeading2'>
        <h3>Sample text 2</h3>
    </div>
    
    
    <div className='sideHeading3'>
        <h3>Sample text 3</h3>
    </div> 
    
    </div>
 
    </>
)

}
export default SampleTask;