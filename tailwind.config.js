/** @type {import ('tailwndcss').Config} */
module.exports={
  plugins:[
    function ({addUtilities}){
        const newUtilities={
            ".scrollbar-webkit":{
                "&::-webkit-scrollbar":{
                    height:"5px",
                    width:"1px"
                   
                },
                "&::-webkit-scrollbar-track":{
                    background:"#F3F3F3",borderRadius:"10px"

                },
                "&::-webkit-scrollbar-thumb":{
                    backgroundColor:"#B5B5B5",
                    borderRadius:"10px",
                    border:"1px solid black"
                }
            }
        }
        addUtilities(newUtilities,["responsive","hover"])
    }
  ]
}