
// 요소를 리턴하려면 ()를 써야함.

(function(){


function ProImg(){
return(<>
        <img src="../images/blue.jpg" alt="blue" />
        </>
)
}


function ProSize(){
    function optionSize(){
        const sizes= window.data.allSize;
        // console.log(sizes)
       return sizes.map((item,index)=>{return (<option value={item} key={index}>{item}</option>)})
     
    }
    return(
        <>
        <p className="filed">
        <label for="size">size:</label>
    <select>
      {/* <option></option> */}
      {optionSize()}
    </select>
        </p>
        </>
        )
    }

    
    function ProColor(){
        function optionColor(){
            const colors=window.data.allColor;
            // console.log(colors)
            return colors.map(function(item,index){
                return (<option value={item} key={index}>{item}</option>)
            })
        }
        return(
            <>
    <p className="filed">
    <label for="color">color:</label>
    <select id="color">
      {/* <option value="">값</option> */}
      {optionColor()}
    </select>
    </p>
        </>
            )
        }
        



    function App(){
        return(
            <div className="custom">
                <div className="pic">
                <ProImg />
                </div>
                <div className="selector">
            <ProSize />
            <ProColor />
                </div>
            </div>
        )
    }


    // export

    const root=ReactDOM.createRoot(document.querySelector("#root"));
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
})()



















