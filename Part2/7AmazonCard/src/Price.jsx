export default function Price({oldPrice,newPrice}){
    let oldStyles ={
        textDecorationLine:"Line-through",
    };

    let newStyles ={
        fontWeight: "bold",
    };

    let Styles ={
        backgroundColor:"#e0c367",
        height:"50px",
    };
    return(
        <div style={Styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}